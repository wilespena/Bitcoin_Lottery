// Language switcher for the static education pages.
// Kept in an external file so the pages work under a strict Content-Security-Policy.
(function () {
  var pages = { en: "education.html", pt: "education-pt.html", es: "education-es.html" };
  var buttons = document.querySelectorAll(".lang-btn[data-lang]");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      if (!pages[lang]) return;
      try {
        localStorage.setItem("app_lang", lang);
      } catch (e) {
        /* storage blocked */
      }
      window.location.href = pages[lang];
    });
  }
})();
