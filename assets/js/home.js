document.addEventListener("DOMContentLoaded", function () {
    console.log("coucou");
      
  const cta_home = document.getElementById("call-to-action-home");
  if (!cta_home) return;

    cta_home.innerHTML = `
        <div>         
            <div class="top">  
                <div class="description"><p>Une communication plus accessible, plus lisible et plus performante. Faisons-le ensemble.</p></div> 
            </div>          
            <div class="actions"
                >     
                    <a href="https://tally.so/r/D4ZjzZ"
                    
                        title="“Recevoir mon mini-audit gratuit” - lien externe"
                        target="_blank"
                        rel="noreferrer noopener"
                    >Recevoir mon mini-audit gratuit</a> 
            </div>
        </div>
        <figure class="is-svg image-square lightbox-figure">
            <img src="https://osuny-1b4da.kxcdn.com/i8aqfbnln7bx0fnauwkw433kc2ux?&quality=80" alt="" loading="lazy">
        </figure>
    `;

});