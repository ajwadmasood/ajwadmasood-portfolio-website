import React from "react";
import unilink1 from "../images/unilink1.png";
import Project from "./Project";
import Title from "./Title";
import { projects } from "../data";

const Latest = () => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <p className="projects-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
          magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
          dignissimos aliquid blanditiis architecto voluptates delectus
          voluptate animi nulla! Autem explicabo perspiciatis officia ea.
        </p>
      </div>
      <div className="section-center projects-center">
        {projects.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default Latest;
