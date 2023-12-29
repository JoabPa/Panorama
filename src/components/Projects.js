import React from "react";
import "./Projects.scss";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import img7 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";
import img9 from "../images/img-9.jpg";
import img10 from "../images/img-10.jpg";
import img11 from "../images/img-11.jpg";
import img12 from "../images/img-12.jpg";
import img13 from "../images/img-13.jpg";
import img14 from "../images/img-14.jpg";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Chech Our Work</h2>
      <div className="projects__gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={img1} className="gallery__img " alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img src={img2} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img src={img3} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img src={img4} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--5">
          <img src={img5} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--6">
          <img src={img6} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--7">
          <img src={img7} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--8">
          <img src={img8} className="gallery__img " alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--9">
          <img src={img9} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--10">
          <img src={img10} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--11">
          <img src={img11} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--12">
          <img src={img12} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--13">
          <img src={img13} className="gallery__img" alt="project"></img>
        </figure>

        <figure className="gallery__item gallery__item--14">
          <img src={img14} className="gallery__img" alt="project"></img>
        </figure>
      </div>
    </section>
  );
}

export default Projects;
