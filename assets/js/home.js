document.addEventListener("DOMContentLoaded", function () {
    console.log("coucou");
      
  const cta_home = document.getElementById("call-to-action-home");
  if (!cta_home) return;

    cta_home.innerHTML = `
        <div>         
            <div class="top">  
                <div class="description">
                    <p>Audit RGAA, Conseil, Accompagnement, Formation</p>
                </div> 
            </div>          
            <div class="actions"
                >     
                    <a href="https://tally.so/r/D4ZjzZ"
                    
                        title="“Recevoir mon mini-audit gratuit” - lien externe"
                        target="_blank"
                        rel="noreferrer noopener"
                    >Recevoir mon mini-audit gratuit</a> 
            </div>
            <div class="needs">
                <p>Vous avez besoin : </p>
                <ul>
                    <li>d'auditer votre site ou application ?</li>
                    <li>de corriger les problèmes identifiés ?</li>
                    <li>d'intégrer l'accessibilité dans une refonte ?</li>
                    <li>de former vos équipes ?</li>
                    <li>de disposer d'une experte accessibilité à vos côtés ?</li>
                </ul>
            </div>
        </div>
        <figure class="is-svg image-square lightbox-figure">
            <img src="https://osuny-1b4da.kxcdn.com/i8aqfbnln7bx0fnauwkw433kc2ux?&quality=80" alt="" loading="lazy">
        </figure>
    `;

});