/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-hero-descktop": "url('./assets/bg-hero-descktop.webp')",
        "custom-bg-hero-mobile": "url('./assets/bg-hero-mobile.webp')",
        "custom-icon-button": "url('./assets/icone-whatsapp-branco.svg')",
        "custom-icon-whatsapp-sec-five":
          "url('./assets/icone-whatszapp-amarelo.svg')",
        "custom-icon-instagram-sec-five": "url('./assets/icone-instagram.svg')",

        "custom-bg-two-descktop": "url('./assets/bg-two-descktop.webp')",
        "custom-bg-two-mobile": "url('./assets/bg-two-mobile.webp')",
        "custom-bg-tree-descktop": "url('./assets/bg-tree-descktop2.webp')",
        "custom-bg-tree-mobile": "url('./assets/bg-tree-mobile2.webp')",
        "custom-bg-for-descktop": "url('./assets/bg-for-descktop.webp')",
        "custom-bg-for-mobile": "url('./assets/bg-for-mobile.webp')",
        "custom-bg-five-descktop": "url('./assets/bg-five-descktop.webp')",
        "custom-bg-five-mobile": "url('./assets/bg-five-mobile.webp')",

        "custom-icone-sec-tree": "url('./assets/icone-cadeia.svg')",
        "custom-icone2-sec-tree": "url('./assets/icone-distintivo.svg')",
        "custom-icone3-sec-tree": "url('./assets/icone-pessoas.svg')",
        "custom-icone4-sec-tree": "url('./assets/icone-algemas.svg')",
        "custom-icone5-sec-tree": "url('./assets/icone-cadeado-l2.svg')",
        "custom-icone6-sec-tree": "url('./assets/icone-lupa.svg')",
        "custom-icone7-sec-tree": "url('./assets/icone-casa.svg')",
        "custom-icone8-sec-tree": "url('./assets/icone-de-duas-maos.svg')",

        "custom-icon-seta-rodape": "url('./assets/seta-para-cima.svg')",
      },

      colors: {
        "bg-degrade-button-hero": "linear-gradient(to left, #EBCF7F, #C39157)",
      },
    },
  },
  plugins: [],
};
