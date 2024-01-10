// app.js
import './app';

// index.js
import { InitPoodlApp } from "@poodl/widget"; // Import the necessary functions or objects

window.onload = () => {
  if (typeof InitPoodlApp === 'function') {
    InitPoodlApp("poodl-root", {
      // Your configuration here
    });
  } else {
    console.error("InitPoodlApp function not found. Make sure the Poodl widget library is correctly loaded.");
  }
};
