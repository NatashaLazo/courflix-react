import "../Temporada/style.scss";
import img1 from "../Temporada/img-serie/cap1.png";
import img2 from "../Temporada/img-serie/cap2.png";
import img3 from "../Temporada/img-serie/cap3.png";

function Capitulos() {
  return (
    <main className="main-content">
      <div className="cover-wrapper">
        <div className="content-wrapper">
          <h1 className="title">Breaking Bad</h1>
          <a class="year-wrapper">2008</a>
          <a className="age-wrapper">16+</a>
          <a className="temporada-wrapper">5 temporadas</a>

          <div className="action-wrapper">
            <a className="action-boton">Reproducir</a>
          </div>
        </div>

        <div className="catalog-wrapper">
          <div className="catalog">
            <h4 className="title">Temporada 1</h4>
            <div className="contenido-catalog">
              <div className="img-catalog">
                <a>
                  <img src={img1}></img>
                </a>
                <div className="text-catalog">
                  <h3 class="title-catalog">Principio del fin</h3>
                  <p class="p-catalog">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="img-catalog">
                <a>
                  <img src={img2}></img>
                </a>
                <div className="text-catalog">
                  <h3 class="title-catalog">El gato en la bolsa</h3>
                  <p class="p-catalog">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="img-catalog">
                <a>
                  <img src={img3}></img>
                </a>
                <div className="text-catalog">
                  <h3 class="title-catalog">La bolsa en el rio</h3>
                  <p class="p-catalog">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Capitulos;
