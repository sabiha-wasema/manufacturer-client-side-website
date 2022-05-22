module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#263049",
          "secondary": "#136371",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#00AEAC",
          "success": "#CA2253",
          "warning": "#EE4E56",
          "error": "#F2D742",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}