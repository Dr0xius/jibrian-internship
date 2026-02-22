import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Carousel from "../Carousel";
import CarouselSkeleton from "../ui/CarouselSkeleton";

export default function NewCollections() {
  const { loading, store } = useContext(AppContext);
  return (
    <section id="new-collections">
      <div className="container">
        <div className="row">
          <h2
            className="new-collections__title"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-mirror="false"
          >
            New Collections
          </h2>
          <div className="new-collections__body">
            {loading ? (
              <CarouselSkeleton />
            ) : (
              <Carousel
                data={store.newCollections}
                key={store.newCollections.collectionId}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
