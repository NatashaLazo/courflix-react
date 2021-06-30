import shape1 from "../Serie/logo/Shapee.png";
import shape2 from "../Serie/logo/Shape.png";
import brakingbad from "../Serie/breakingbad.png";
import "./style.scss";

function Cover() {
  return (
    <div className="main-content">
      <div className="cover-content-wrapper">
        <div className="logo-wrapper-cover"></div>

        <a className="text-logo">95% de coincidencia</a>
        <a className="year-wrapper">2016</a>
        <a className="age-wrapper">16+</a>
        <a className="temporada-wrapper">5 temporadas</a>

        <div className="boton-wrapper">
          <a className="boton-red">Reproducir</a>
          <a className="boton">+ mi lista</a>
          <a className="likee">
            <img src={shape1}></img>
          </a>
          <a className="like">
            <img src={shape2}></img>
          </a>
        </div>

        <div className="text-wrapper">
          <p className="content-wrapper">
            Un profesor de Química de secundaria con cáncer terminal se asocia a
            un exestudiante para asegurar el futuro de su familia al fabricar y
            vender metanfetamina.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Cover;
