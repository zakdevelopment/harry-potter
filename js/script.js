console.log("✨ Witaj w magicznym świecie! Kliknij przycisk i baw się motywami ✨ Ten kod jest już w repozytorium GIT");

const body = document.querySelector("body");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  body.classList.toggle("lumos");
  body.classList.toggle("nox");

  button.textContent = body.classList.contains("lumos")
    ? "Jasny"
    : "Ciemny";
});