// Pleyad — pages légales : année et date automatiques
(function () {
  var annee = new Date().getFullYear();
  document.querySelectorAll("[data-annee]").forEach(function (el) { el.textContent = annee; });
  var date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  document.querySelectorAll("[data-date]").forEach(function (el) { el.textContent = date; });
})();
