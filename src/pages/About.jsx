import React from "react";
import { useNavigate } from "react-router-dom";
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>Salon Nova ženska priča</h1>

      {/* Vlasnica Vesna */}
      <div className="owner-section">
        <div className="owner-image-placeholder">
          <img src="/images/Vesna.jpeg" alt="Vlasnica Vesna" className="owner-image" />
        </div>
        <div className="owner-text">
          <h2>Upoznajte Vesnu</h2>
          <p>
            Vesna je stručna frizerka i vlasnica salona "Nova ženska priča", sa
            više od 15 godina iskustva u negovanju i stilizovanju kose.
            Specijalizovana u Italiji za kolorizaciju modernih frizura, nadogradnje kose i šišanja.
          </p>
          <p>
            Posvećena je svakoj klijentkinji, stvarajući savršene frizure koje
            naglašavaju lepotu i jedinstvenost svake žene.
          </p>
          <p>
            U našem salonu koristimo samo visokokvalitetne proizvode i pratimo
            najnovije trendove u svetu frizerstva, kako biste uvek izašle sa
            osmehom i samopouzdanjem.
          </p>
        </div>
      </div>

      {/* Šminkerke Anja i Julija */}
      <div className="owner-section">
        <div className="owner-image-placeholder">
          <img src="/images/Anja.jpeg" alt="Šminkerka Anja" className="owner-image" />
          <img src="/images/Julija.jpeg" alt="Šminkerka Julija" className="owner-image" />
        </div>
        <div className="owner-text">
          <h2>Naše šminkerke: Anja i Julija</h2>
          <p>
           Mi smo Julija i Anja-profesionalne šminkerke sa više od 3 godine iskustva u ulepsšavanju za venčanja,proslave,
           mature,fotografisanje i sve druge posebne prilike.
          </p>
          <p>
            Julija je završila školu šminkanja kod Bojana Vukadinova i kurs kod Stefana Subotića, dok je Anja završila školu
            šminkanja Sophie Choice i kurs Ane Minić.Naš rad karakterišu preciznost, kreativnost i posvećenost svakom detalju.
          </p>
          <p>
            Otvorene,komunikativne i profesionalne-trudimo se da svaka naša klijentkinja izadje zadovoljna i nasmejana.
          </p>
          <button className="makeup-gallery-button" onClick={() => navigate("/sminkanje")}>
  Pogledaj radove
</button>
        </div>
      </div>

      {/* Manikirka Tanja */}
      <div className="owner-section">
        <div className="owner-image-placeholder">
          <img src="/images/Tanja.jpeg" alt="Manikirka Tanja" className="owner-image" />
        </div>
        <div className="owner-text">
          <h2>Manikirka Tanja</h2>
<p>
  Tanja je pravi umetnik sa više od 10 godina iskustva. Kada je u pitanju nega i ulepšavanje noktiju. Njene ruke stvaraju čuda – od
  besprekornih klasičnih manikira do modernog gel dizajna i unikatnog nail arta koji oduzima dah.
</p>
<p>
  Sa dugogodišnjim iskustvom, vrhunskom preciznošću i neprevaziđenim estetskim osećajem, Tanja
  svakom klijentu pruža tretman koji prevazilazi očekivanja.
</p>
<p>
  Njena posvećenost detaljima i ljubaznost čine da se svaka klijentkinja oseća posebno, opušteno i
  zadovoljno – sa noktima koji plene pažnju i traju.
</p>

        </div>
      </div>
          {/* Manikirka Tanja */}
      <div className="owner-section">
        <div className="owner-image-placeholder">
          <img src="/images/Ivona.jpeg" alt="Kozmeticar-esteticar Ivona" className="owner-image" />
        </div>
        <div className="owner-text">
          <h2>Kozmeticar-esteticar Ivona</h2>
<p>
  Ivona Brankovan kozmeticar-esteticar. Zavrsila Akademiju za kozmetiku i estetiku i vec dve godine radi kao profesionalni kozmeticar sto obuhvata sve tretmane lica.
</p>
<p>
  Najvise radi sa aknoznim kozama, ali pored toga pruza usluge anti-age tretmana, dubinske hidratacije, ciscenja, mikroneedling-a, ultrazvuka,
   mezoporacije i sve ostale dobro poznate tretmane. 
</p>
<p>
  Pristupa svakom klijentu individualno jer ne postoje dve iste koze na svetu,
   te u dogovoru sa klijentima pravi plan za njihovu negu kako kroz same tretmane tako i za negu kod kuce.
</p>

        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Nazad na početnu
      </button>
    </div>
  );
};

export default About;
