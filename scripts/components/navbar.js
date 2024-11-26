// ~/scripts/components/navbar.js [DBTow]

// Code for the navigation bar component

class CustomNavBar extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }
  // Element functionality written in here

  connectedCallback() {
    console.log("Custom element added to page.");

    // Create a shadow root
    // The custom element itself is the shadow host
    const shadow = this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    const anchor = document.createElement("a");

    anchor.textContent = "Home";

    div.appendChild(anchor);
    shadow.appendChild(div);
    console.log("Custom element rendered");
  }
}

// Registering a custom element
customElements.define("custom-nav-bar", CustomNavBar);
