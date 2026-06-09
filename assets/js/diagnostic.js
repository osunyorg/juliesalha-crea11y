document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("diagnostic-app");
  if (!container) return;

  container.innerHTML = `
    <div class="diagnostic-container">
        <p id="diag-desc">
            Cochez les affirmations qui correspondent à vos pratiques actuelles.
            Vous pouvez en sélectionner autant que vous le souhaitez.
        </p>
        <!-- Zone de progression annoncée dynamiquement (critère 7.1) -->
        <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            aria-label="Progression du diagnostic"
        >
            <span id="progress-sr" class="sr-only">0 éléments cochés sur 8</span>
        </div>

        <form
            id="diag-form"
            aria-labelledby="diag-title"
            aria-describedby="diag-desc"
            novalidate
        >

            <fieldset>
            <legend>Clarté</legend>
            <ul role="list">
                <li>
                <input
                    type="checkbox"
                    id="clarte-1"
                    class="score-item"
                    data-category="clarte"
                >
                <label for="clarte-1">Phrases simples</label>
                </li>
                <li>
                <input
                    type="checkbox"
                    id="clarte-2"
                    class="score-item"
                    data-category="clarte"
                >
                <label for="clarte-2">Message compréhensible</label>
                </li>
            </ul>
            </fieldset>

            <fieldset>
            <legend>Structure</legend>
            <ul role="list">
                <li>
                <input type="checkbox" id="structure-1" class="score-item" data-category="structure">
                <label for="structure-1">Titres clairs</label>
                </li>
                <li>
                <input type="checkbox" id="structure-2" class="score-item" data-category="structure">
                <label for="structure-2">Paragraphes courts</label>
                </li>
            </ul>
            </fieldset>

            <fieldset>
            <legend>Accessibilité</legend>
            <ul role="list">
                <li>
                <input type="checkbox" id="acc-1" class="score-item" data-category="accessibilite">
                <!-- CORRECTION 4 : "Alt text images" → intitulé en français complet
                    Un intitulé en jargon technique est insuffisant pour les
                    utilisateurs non-techniques (critère 11.2 — intitulé pertinent). -->
                <label for="acc-1">Textes alternatifs sur les images</label>
                </li>
                <li>
                <input type="checkbox" id="acc-2" class="score-item" data-category="accessibilite">
                <label for="acc-2">Contrastes suffisants</label>
                </li>
            </ul>
            </fieldset>

            <fieldset>
            <legend>Inclusion</legend>
            <ul role="list">
                <li>
                <input type="checkbox" id="incl-1" class="score-item" data-category="inclusion">
                <label for="incl-1">Langage inclusif</label>
                </li>
                <li>
                <input type="checkbox" id="incl-2" class="score-item" data-category="inclusion">
                <label for="incl-2">Exemples variés</label>
                </li>
            </ul>
            </fieldset>
            <button type="submit" id="diagnostic-btn" aria-controls="result-zone">
            Voir mon diagnostic
            </button>

            <section
            id="result-zone"
            aria-live="polite"
            aria-atomic="true"
            aria-label="Résultats du diagnostic"
            tabindex="-1"
            hidden
            >
                <h3>Résultats de votre diagnostic</h3>
                <div id="cat-scores"></div>
                <p id="global-msg"></p>
            </section>
        </form>
      <div id="diagnostic-result"></div>
    </div>
  `;

  const btn = document.getElementById("diagnostic-btn");

  btn.addEventListener("click", function () {

      const form = document.getElementById('diag-form');
  const resultZone = document.getElementById('result-zone');

  // Mise à jour de la progression à chaque changement (critère 7.1)
  document.querySelectorAll('.score-item').forEach(cb => {
    cb.addEventListener('change', () => {
      const n = document.querySelectorAll('.score-item:checked').length;
      document.getElementById('progress-sr').textContent =
        `${n} élément${n > 1 ? 's' : ''} coché${n > 1 ? 's' : ''} sur 8`;
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Calcul des scores par catégorie...

    // CORRECTION 8 : démasquer la zone avec removeAttribute('hidden')
    // puis déplacer le focus dessus — le aria-live annonce le contenu.
    resultZone.removeAttribute('hidden');
    resultZone.focus();
  });

    const items = document.querySelectorAll(".score-item");

    let total = 0;
    let clarte = 0;
    let structure = 0;
    let accessibilite = 0;
    let inclusion = 0;

    const max = items.length;

    items.forEach(item => {
      if (item.checked) {
        total++;

        switch (item.dataset.category) {
          case "clarte":
            clarte++;
            break;
          case "structure":
            structure++;
            break;
          case "accessibilite":
            accessibilite++;
            break;
          case "inclusion":
            inclusion++;
            break;
        }
      }
    });

    const percent = Math.round((total / max) * 100);

    let level = "";
    let recommendations = [];

    if (percent >= 80) level = "Bon niveau d'accessibilité";
    else if (percent >= 50) level = "À améliorer";
    else level = "Priorité d'amélioration";

    if (clarte < 1) recommendations.push("Simplifiez vos messages.");
    if (structure < 1) recommendations.push("Structurez davantage vos contenus.");
    if (accessibilite < 1) recommendations.push("Ajoutez des éléments d'accessibilité numérique.");
    if (inclusion < 1) recommendations.push("Renforcez l'inclusion dans vos contenus.");

    document.getElementById("diagnostic-result").innerHTML = `
      <p><strong>Score :</strong> ${total} / ${max}</p>

      <h4>Priorités :</h4>
      <ul>
        ${recommendations.map(r => `<li>${r}</li>`).join("")}
      </ul>

      <p><a class="mini-audit-link" href="https://tally.so/r/D4ZjzZ" target="_blank" title="Recevoir mon mini-audit gratuit” - lien externe">Recevoir un mini audit gratuit</a></p>
    `;
  });


});