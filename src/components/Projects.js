import React from "react";
import "./Projects.scss";
import img1 from "../images/img-1.jpeg";
import img2 from "../images/img-2.jpeg";
import img3 from "../images/img-3.jpeg";
import img4 from "../images/img-4.jpeg";
import img5 from "../images/img-5.jpeg";
import img6 from "../images/img-6.jpeg";
import img7 from "../images/img-7.jpeg";
import img8 from "../images/img-8.jpeg";
import img9 from "../images/img-9.jpeg";
import img10 from "../images/img-10.jpeg";
import img11 from "../images/img-11.jpeg";
import img12 from "../images/img-12.jpeg";
import img13 from "../images/img-13.jpeg";
import img14 from "../images/img-14.jpeg";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Chech Our Work</h2>
      <div className="projects__gallery">
        <figure className="gallery__item gallery__item--1">
          <img
            loading="lazy"
            src={img1}
            className="gallery__img "
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img
            loading="lazy"
            src={img2}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img
            loading="lazy"
            src={img3}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img
            loading="lazy"
            src={img4}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--5">
          <img
            loading="lazy"
            src={img5}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--6">
          <img
            loading="lazy"
            src={img6}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--7">
          <img
            loading="lazy"
            src={img7}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--8">
          <img
            loading="lazy"
            src={img8}
            className="gallery__img "
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--9">
          <img
            loading="lazy"
            src={img9}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--10">
          <img
            loading="lazy"
            src={img10}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--11">
          <img
            loading="lazy"
            src={img11}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--12">
          <img
            loading="lazy"
            src={img12}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--13">
          <img
            loading="lazy"
            src={img13}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>

        <figure className="gallery__item gallery__item--14">
          <img
            loading="lazy"
            src={img14}
            className="gallery__img"
            alt="project"
          ></img>
        </figure>
      </div>
    </section>
  );
}

export default Projects;
