// src/App.jsx
import React from "react";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo"; 
import { GoogleGeminiEffect } from "./components/ui/google-gemini-effect";
import Gallery from "./components/Gallery";

function App() {
  const pathLengths = [1, 0.8, 0.6, 0.4, 0]; 
  return (
    
      
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white">
    <div className="App">
    <GoogleGeminiEffect/>
      <HeroParallaxDemo />
      <Gallery/>
    </div>
    </div>
  );
}

export default App;
