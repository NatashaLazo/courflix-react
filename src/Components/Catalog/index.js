import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Catalog/style.scss";

const photos = [
  {
    name: "serie 1",
    url: "https://occ-0-1701-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYie8ehGcww1b5w7X5mIaS1FWWs9Z7BznE-X0j_XtOdq1kYEyUauFg0DaBdmQSm52EiVm09gCv6qIIrXbXxZMW8NOJc.webp?r=b5c"
  },
  {
    name: "serie 2",
    url: "https://occ-0-1701-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXnpk8QxbRNgDikGuL3c6y7FKpkeLbLvNmmuNFvloDtdgstyHfJ6z9maLRQbFpRJmpiR-nwtkvDNi_J9OEJ9cSiDXfPopOp_a2WrxOGeiD8gxJYE5JqefMdZuGhmT619mTrdrSE7rgVoXxm7lPfh1ekhL4AFoT6HYxH-ay77muAzmuzULPsYXiI.jpg?r=b24"
  },
  {
    name: "serie 3",
    url: "https://occ-0-1701-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXlNo4LRwI4b-PjCCjKNuzTGFAmZHC8ZXH-13Nv58kj6FXVHOYb1y67Hl0NAkz8iwL9DLANPmogG-kEmQuqXxgUE3hI.webp?r=5af"
  },
  {
    name: "serie 4",
    url: "https://occ-0-1701-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d"
  }
];

class Carrusel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: "slides"
    };
    return (
      <div>
        <h2 className="title-serie"> Series </h2>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url} className="img-serie" />
              </div>
            );
          })}
        </Slider>
        <h2 className="title-serie"> Seguir viendo contenido de Nati</h2>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url} className="img-serie" />
              </div>
            );
          })}
        </Slider>
        <h2 className="title-serie"> Agregados recientemente </h2>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url} className="img-serie" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default Carrusel;
