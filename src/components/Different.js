import React from 'react';
import './Different.css';
import { StaticImage } from 'gatsby-plugin-image';
import Master from '/src/assets/svg/Master.svg';
import Creativa from '/src/assets/svg/Creativa.svg';
import Articulos from '/src/assets/svg/Articulos.svg';

function Different() {
  return (
    <section className="different">

      <StaticImage src="../assets/images/HazmeParte.jpg"
        alt="Hazme Parte"
        placeholder="blurred"
        className="different-img"
        id="different-img"
      // imgStyle={{ objectPosition: "50% 50%", objectFit: "cover" }}
      />

      <div className="differences">
        <h2>Hazme parte de tu equipo</h2>
        <div className="difference">
          <div><Master /> </div>
          <div>
            <h3>Máster en Marketing Digital</h3>
            <p>Especialista en estrategias de marca en las diferentes plataformas digitales.</p>
          </div>
        </div>
        <div className="difference">
          <div><Creativa /> </div>
          <div>
            <h3>+8 años en la industria creativa</h3>
            <p>Trabajando de la mano de equipos de marketing y publicidad para marcas nacionales y regionales.</p>
          </div>
        </div>
        <div className="difference">
          <div><Articulos /> </div>
          <div>
            <h3>+30 artículos publicados</h3>
            <p>En importantes portales de marketing digital de la región.</p>
          </div>
        </div>
        <button>Conocer más</button>
      </div>

    </section>
  )
}

export default Different