const languageButtons = document.querySelectorAll("[data-lang-switch]");
const storedLanguage = window.localStorage.getItem("preferred-language");
const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

function setLanguage(language) {
  const nextLanguage = language === "zh" ? "zh" : "en";
  document.body.dataset.lang = nextLanguage;
  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  window.localStorage.setItem("preferred-language", nextLanguage);

  languageButtons.forEach((button) => {
    const active = button.dataset.langSwitch === nextLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

setLanguage(urlLanguage || storedLanguage || browserLanguage);

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
