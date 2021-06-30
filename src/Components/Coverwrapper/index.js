import "../Coverwrapper/style.scss";
import img from "../Coverwrapper/Bitmap.png";
import { Link } from "react-router-dom";

function Coverwrapper() {
  return (
    <main>
      <div className="cover-wrapper">
        <div className="cover-content-wrapper">
          <h3 className="original-advise">Original de COURFLIX</h3>
          <h1 className="content-title">Black Summer</h1>
        </div>
        <div className="action-wrapper">
          <a className="action">Reproducir</a>

          <a className="action" href="#">
            + Mi lista
          </a>
        </div>

        <p className="content-season">Ve la temporada 1 </p>
        <p className="content-description">
          Una ansiada luna de miel. Un asesinato terrible.
          <br />
          Varios sospechosos. Si sobreviven, serán unas vacaciones <br /> de
          ensueño.
        </p>
      </div>
    </main>
  );
}

export default Coverwrapper;
