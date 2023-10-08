// script.js
const boutonInscription = document.getElementById("bouton-inscription");
const popup = document.getElementById("popup");
const boutonFreelancer = document.getElementById("bouton-freelancer");
const boutonClient = document.getElementById("bouton-client");

// Ouvre le popup lorsque vous cliquez sur "S'inscrire"
boutonInscription.addEventListener("click", () => {
    popup.classList.add("visible");
    popup.classList.remove("hidden");
});