const header = document.querySelector("header");
const footer = document.querySelector("footer");
const contact = document.querySelector(".index-contact");

header.innerHTML = `
      <nav>
        <a href="index.html"
          ><img src="src/logo-nav.png" alt="Logo Corpus Memori"
        /></a>
        <ul class="desktop">
          <li><a href="news.html">News</a></li>
          <li>
            <span href="" id="piercing">
              Piercing <i class="fas fa-caret-down"></i>
            </span>
            <div class="piercing">
              <a
                href="https://business.facebook.com/corpusmemoripiercing/shop/?rt=19&__cft__[0]=AZUs1IV6MnLqS5I6IDdl4324strUguTuPqS1TS7U7Dn8UWT47bM63RiQZc9J1ZST4DgLuyRygjjeTV-lEMdzwRZdEUlCD4RPILQfXqA7kT945RUTi-uj1EmX-vwrouSea02iYKYNGh4a5lIwZ34sAw0I&__tn__=-UK-R"
                target="_blank"
                >Boutique</a
              >
              <a href="piercing.html">Infos</a>
              <a href="tarfis.html">Tarifs</a>
            </div>
          </li>
          <li>
            <span id="tattoo"> Tattoo <i class="fas fa-caret-down"></i> </span>
            <div class="tattoo">
              <a href="tattoo.html">Infos</a>
              <a href="FAQ.html">F.A.Q</a>
              <a href="guests.html">Guests</a>
              <a href="residents.html">Résidents</a>
            </div>
          </li>
          <li><a href="contact.html" class="special">Contact</a></li>
          <ul class="social">
            <li>
              <a
                href="https://www.facebook.com/corpusmemoripiercing/"
                target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/corpusmemori/" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/corpusmemoripiercing/"
                target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
        </ul>
        <ul class="mobile">
        <i class="fas fa-bars"></i> Menu
        </ul>
      </nav>
      <div class="hide-menu">
      <div class="container">
  <a href="news.html">News</a>

  <span href=""> Piercing <i class="fas fa-caret-down"></i> </span>
    <div class="der">
    

  <a
    href="https://business.facebook.com/corpusmemoripiercing/shop/?rt=19&__cft__[0]=AZUs1IV6MnLqS5I6IDdl4324strUguTuPqS1TS7U7Dn8UWT47bM63RiQZc9J1ZST4DgLuyRygjjeTV-lEMdzwRZdEUlCD4RPILQfXqA7kT945RUTi-uj1EmX-vwrouSea02iYKYNGh4a5lIwZ34sAw0I&__tn__=-UK-R"
    target="_blank"
    ><i class="fas fa-circle"></i>Boutique</a
  >
  <a href="piercing.html"><i class="fas fa-circle"></i>Infos</a>
  <a href="tarfis.html"><i class="fas fa-circle"></i>Tarifs</a>
  </div>

  <span> Tattoo <i class="fas fa-caret-down"></i> </span>
  <div class="der">
    <a href="tattoo.html"><i class="fas fa-circle"></i>Infos</a>
    <a href="FAQ.html"><i class="fas fa-circle"></i>F.A.Q</a>
    <a href="guests.html"><i class="fas fa-circle"></i>Guests</a>
    <a href="residents.html"><i class="fas fa-circle"></i>Résidents</a>
  </div>

  <a href="contact.html" class="special">Contact</a>
  <ul class="social">
    <li>
      <a href="https://www.facebook.com/corpusmemoripiercing/" target="_blank"
        ><i class="fab fa-facebook-f"></i
      ></a>
    </li>
    <li>
      <a href="https://www.instagram.com/corpusmemori/" target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
    </li>
    <li>
      <a href="https://www.instagram.com/corpusmemoripiercing/" target="_blank"
        ><i class="fab fa-instagram"></i
      ></a>
    </li>
  </ul>
  </div>
</div>

`;

footer.innerHTML = `
  <!-- 
      <section class="galerie">
        <div class="inner">
          <h1 id="contact">Galerie</h1>
          <img src="src/line.png" alt="" class="line" />
          <div class="galerie-image">
            <img src="src/fictif.jpg" alt="fictif" />
            <img src="src/fictif.jpg" alt="fictif" />
            <img src="src/fictif.jpg" alt="fictif" />
            <img src="src/fictif.jpg" alt="fictif" />
            <img src="src/fictif.jpg" alt="fictif" />
          </div>
          <a href="">Artistes résidents</a>
        </div>
      </section>
    -->

      <section class="infos">
        <div class="inner">
          <ul class="social">
            <li>
              <a
                href="https://www.facebook.com/corpusmemoripiercing/"
                target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/corpusmemori/" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/corpusmemoripiercing/"
                target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
          <p>corpusmemori.com | Tous droits réservés 2022</p>
          <div class="links">
            <a href="">Mentions Légales</a> -
            <a href=""> Politique de confidentialité</a>
          </div>
        </div>
      </section>
`;

contact.innerHTML = ` <div class="inner">
          <h1 id="contact">Nous contacter</h1>
          <h2>Vous souhaitez vous faire tatouer ou piercer ?</h2>
          <h2>
            Pour les rendez-vous piercing, merci de nous contacter<br />
            directement par téléphone aux heures d’ouverture
          </h2>
          <img src="src/line.png" alt="" class="line" />
          <article>
            <a href="tel:+33980541638">
              <div>
                <span> <i class="fas fa-phone-alt"></i></span>
                <h3>Par Téléphone</h3>
                <p>+(33) 9 80 54 16 38</p>
              </div>
            </a>
            <a href="mailto:corpusmemori@gmail.com">
              <div>
                <span> <i class="fas fa-paper-plane"></i></span>
                <h3>Par E-mail</h3>
                <p>corpusmemori<br>@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps?q=6+Rue+des+Chapeliers,+44000+Nantes"
              target="_blank"
            >
              <div>
                <span> <i class="fas fa-map-marker-alt"></i></span>
                <h3>Nous trouver</h3>
                <p>
                  6 Rue des Chapeliers<br />
                  44000 Nantes
                </p>
              </div>
            </a>
          </article>
        </div>`;

const tattooSpan = document.getElementById("tattoo");
const tattooDiv = document.querySelector(".tattoo");
const piercingDiv = document.querySelector(".piercing");
const piercingSpan = document.getElementById("piercing");

tattooSpan.addEventListener("click", () => {
  console.log("tattoo");
  tattooDiv.classList.toggle("visible");
});

piercingSpan.addEventListener("click", () => {
  console.log("piercing");
  piercingDiv.classList.toggle("visible");
});

const hideMenu = document.querySelector(".hide-menu");
const mobileButton = document.querySelector(".mobile");

mobileButton.addEventListener("click", () => {
  console.log("piercing");
  hideMenu.classList.toggle("visible2");
});
