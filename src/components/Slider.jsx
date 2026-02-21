import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
  const { newCollections } = useContext(AppContext);
  const options = {
    loop: true,
    items: 6,
    nav: true,
    dots: true,
    center: false,
    margin: 16,
  };

  return (
    <>
      <OwlCarousel className="owl-carousel main-carousel owl-nav" {...options}>
        {newCollections.map((collection, index) => (
          <Link
            to="/collection"
            key={index}
            className="collection"
            style={{ width: "100%" }}
          >
            <img
              src={collection.imageLink}
              alt=""
              className="collection__img"
            />
            <div className="collection__info">
              <h3 className="collection__name">{collection.title}</h3>
              <div className="collection__stats">
                <div className="collection__stat">
                  <span className="collection__stat__label">Floor</span>
                  <span className="collection__stat__data">
                    {`${Math.round(collection.floor * 100) / 100} ETH`}
                  </span>
                </div>
                <div className="collection__stat">
                  <span className="collection__stat__label">Total Volume</span>
                  <span className="collection__stat__data">
                    {collection.totalVolume} ETH
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </OwlCarousel>
    </>
  );
};

export default Slider;
