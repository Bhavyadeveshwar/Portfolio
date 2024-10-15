// src/components/HeroParallaxDemo.jsx
import React from "react";
import { HeroParallax } from "./ui/hero-parallax"; // adjust the path if necessary

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Social Hub",
    link: "https://social-hub.app/",
    thumbnail:
     "https://i.ibb.co/Rbrdscv/Screenshot-2024-09-15-211436.png"
  },
  {
    title: "The Ace", 
    link: "https://www.theace.tech/",
    thumbnail:
      "https://i.ibb.co/xCD6pQN/Screenshot-2024-07-29-010544.png"
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png" ,
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
];
