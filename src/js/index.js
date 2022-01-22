$(function () {
    const topmenu = $('#topmenu');
    const header = $('header');
    const btnreadmorebanner = $('#btnreadmorebanner');
    let topMenuFloat = localStorage.getItem("float");
    let topMenuAlign = localStorage.getItem("textalign");
    let bannerbgsize = localStorage.getItem("bgsize")
    let bannerbgposition = localStorage.getItem("bgposition")
    let bannerbgattatchment = localStorage.getItem("bgattatchment")
    let bannerbtnalign = localStorage.getItem("btnalign")
    let bannerbtnbgcolor = localStorage.getItem("btnbgcolor")
    console.log(topMenuFloat);
    if (topMenuFloat == null) {

        topMenuFloat = "float-right";
    }
    if (topMenuAlign == null) {
        topMenuAlign = "text-right";
    }
    if (bannerbgsize == null) {

        bannerbgsize = "bg-cover";
    }
    if (bannerbgposition == null) {
        bannerbgposition = "bg-center";

    }
    if (bannerbgattatchment == null) {

        bannerbgattatchment = "bg-fixed";
    }
    if (bannerbtnalign == null) {
        bannerbtnalign = "text-center";
    }
    if (bannerbtnbgcolor == null) {

        bannerbtnbgcolor = "#fff";
    }
    const hoveropacity = 0.8;
    topmenu.addClass(topMenuFloat + " " + topMenuAlign)
    header.addClass(bannerbgposition.concat(" ", bannerbgsize, " ", bannerbgattatchment));
    btnreadmorebanner.addClass(bannerbtnalign);
    btnreadmorebanner.css('background-color', bannerbtnbgcolor);
    $(btnreadmorebanner).hover(function ($event) {
        this.style.opacity = hoveropacity;


    }, function () {
        this.style.opacity = 1;

    }
    );



});