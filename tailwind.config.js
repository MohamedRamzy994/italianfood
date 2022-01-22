module.exports = {
  content: [
    "./src/*.{html,js}",
    './src/components/*.{html,js}',
  ],
  theme: {

    extend: {
      fontFamily: {
        'reey': 'Reey, sans-serif;'

    },
      backgroundImage: {
        'background-header': "url('../imgs/HeaderBackground.png')",
        'background-pizza':"url('../imgs/pizzabackgroundsection.png'),url('../imgs/HeaderBackground.png')",
        'background-subscribe': "url('../imgs/backgroundsubscribe.png')"
      }
    }
     
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
