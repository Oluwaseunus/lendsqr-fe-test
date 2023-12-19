import localFont from "next/font/local";

export const AvenirNext = localFont({
  src: [
    {
      path: "../assets/fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/AvenirNextLTPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
