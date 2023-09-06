import React from 'react';
import { Carousel } from "react-bootstrap";
import mountains from "../assets/mountains.jpg";
import forest from "../assets/forest.jpg";
import lforest from "../assets/lforest.jpg";

export default function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block carousel-img" src={mountains} alt="mountains" />
        <Carousel.Caption>
          <h3>Nature is beautiful at any time of the year.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-img" src={forest} alt="mountains" />
        <Carousel.Caption>
          <h3>There is no bad weather. Enjoy the moment!</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={lforest}
          alt="light forest"
        />
        <Carousel.Caption>
          <h3>Nature is beautiful at any time of the year.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}