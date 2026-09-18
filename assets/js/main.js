(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Cookie banner (single, discreet — no other popups on the page)
  var banner = document.getElementById("cookie-banner");
  var accept = document.getElementById("cookie-accept");
  var decline = document.getElementById("cookie-decline");
  var STORAGE_KEY = "leve-cookie-choice";

  function getChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* ignore */ }
  }

  if (banner && !getChoice()) {
    banner.hidden = false;
  }
  if (accept) accept.addEventListener("click", function () { setChoice("accepted"); banner.hidden = true; });
  if (decline) decline.addEventListener("click", function () { setChoice("declined"); banner.hidden = true; });
})();
