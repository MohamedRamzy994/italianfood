$(function () {
    const click = 'click';
    const mainPlaceHolder = $('#mainplaceholder');
    const menulink = $('#menulink');
    const userProfile = $('#userprofile');
    const userProfileTrigger = $('#user-menu-button');
    const dashboardBody = $('main,header,#userprofile');
    const menuToggler = $('#menu-toggler');
    const mainMenu = $('#mobile-menu');
    const mainMenuToggler = $('#menutoggler');
    const menusettingssection = $('#menu-settings');
    const buttonBackgroundColor = $('#btnbgcolorvalue');
    const btnbgcolorValue = $('#btnbgcolor');
    const icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    const btns = $(".widget input[type=submit], .widget a, .widget button");
    const confirmModel = $("#dialog-message");
    // DOM constants
    const btnmenuSubmit = $('#btnsavemenu');
    const btnbannerSubmit = $('#btnsavebanner');
    const menuform = $('#menuform');
    const bannerform = $('#bannerform');
    const accordion = $("#accordion");
    const accordionBanner = $("#accordion-banner");
    accordion.accordion(
        {
          
            header: "> div > h3",
            collapsible: true,
            icons: icons
        }
    ).sortable({
        axis: "y",
        handle: "h3",
        stop: function (event, ui) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-state-focus
            ui.item.children("h3").triggerHandler("focusout");

            // Refresh accordion to handle new order
            $(this).accordion("refresh");
        }
    });
    accordionBanner.accordion(
        {
          
            header: "> div > h3",
            collapsible: true,
            icons: icons
        }
    ).sortable({
        axis: "y",
        handle: "h3",
        stop: function (event, ui) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-state-focus
            ui.item.children("h3").triggerHandler("focusout");

            // Refresh accordion to handle new order
            $(this).accordion("refresh");
        }
    });
    $(btnbgcolorValue).on('change',function ($event) { 
       $(buttonBackgroundColor).text($event.target.value);
    });
    btns.button({

        // icon: "ui-icon-save",
    });
    confirmModel.dialog({
        width:"100%",
        position:"top",
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        buttons: {
            Ok: function () {
                $(this).dialog("close");
                btnmenuSubmit.removeAttr('disabled');
                btnbannerSubmit.removeAttr('disabled');
                $(menuform).trigger("reset");
                $(bannerform).trigger("reset");

            }
        },
        close: function( event, ui ) {
            btnmenuSubmit.removeAttr('disabled');
            $(menuform).trigger("reset");
        },
    });
    $(btnmenuSubmit).on(click, function ($event) {
        $event.preventDefault();
        btnmenuSubmit.attr('disabled', true);
        btnmenuSubmit.css('opacity', .5);
        const values = menuform.serializeArray();
        if (values.length == 0) {
            confirm("Would you like to continue with defult values?")? btnmenuSubmit.removeAttr('disabled'): btnmenuSubmit.removeAttr('disabled') ;
        }
        else {
            values.forEach(($value, $index) => {

                ($value.name == "float") ? localStorage.setItem("float", $value.value) : "";
                ($value.name == "textalign") ? localStorage.setItem("textalign", $value.value) : "";

            });
            confirmModel.dialog("open")
        }







    });
    $(btnbannerSubmit).on(click, function ($event) {
        $event.preventDefault();
        btnbannerSubmit.attr('disabled', true);
        btnbannerSubmit.css('opacity', .5);
        const values = bannerform.serializeArray();
      

        if (values.length == 0) {
            confirm("Would you like to continue with defult values?")? btnbannerSubmit.removeAttr('disabled'): btnbannerSubmit.removeAttr('disabled') ;
        }
        else {
            values.forEach(($value, $index) => {

                ($value.name == "bgsize") ? localStorage.setItem("bgsize", $value.value) : "";
                ($value.name == "bgposition") ? localStorage.setItem("bgposition", $value.value) : "";
                ($value.name == "bgattatchment") ? localStorage.setItem("bgattatchment", $value.value) : "";
                ($value.name == "btnalign") ? localStorage.setItem("btnalign", $value.value) : "";
                ($value.name == "btnbgcolor") ? localStorage.setItem("btnbgcolor", $value.value) : "";



            });
            confirmModel.dialog("open")
        }

       





    });
    $(menulink).on(click, function () {
    //    menusettingssection.fadeIn();
    });
    // hide userprofile at the top menu
    userProfile.hide();
    mainMenu.hide();
    /**
* ToggleUserProfile is a function to Toggle the userprofile div at top menu
*/
    let ToggleUserProfile = () => {
        userProfile.toggle();
    }
    /**
    * HideUserProfile is a function to hide the userprofile div at top menu
    */
    let HideUserProfile = () => {
        userProfile.hide();
    }
    /**
     *  ToggleMainMenu is a function to toggle the ToggleMainMenu div at top menu
    */
    let ToggleMainMenu = () => {
        mainMenu.toggle(500, 'swing');
    }
    // toggle userprofile div on click user-menu-button
    userProfileTrigger.on(click, function ($event) {
        ToggleUserProfile();
    });

    dashboardBody.on(click, function ($event) {
        HideUserProfile();
        mainMenu.hide();
    });
    $(menuToggler).on(click, function ($event) {
        ToggleMainMenu();
    });
    $(mainMenuToggler).on(click, function ($event) {
        $event.preventDefault();
    });

});