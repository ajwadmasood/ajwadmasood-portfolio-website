import React from "react";
import img from "../images/project-1.jpeg";

const PortfolioProjects = ({ img, firstPath, name, secondPath }) => {
  return (
    <article class="single-project">
      <div class="project-container">
        <img src={img} alt="single project" />
        <a href="https://www.johnsmilga.com" class="project-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
          >
            <path d={firstPath} />
          </svg>
          {/* <i class="fas fa-home"></i> */}
        </a>
      </div>
      <div class="project-details">
        <h4>{name}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet
          amet odit aperiam, provident cum possimus sapiente minus quos! Ipsum?
        </p>
        <div class="project-footer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 496 512"
            >
              <path d={secondPath} />
            </svg>
          </span>
          {/* <i class="fab fa-github"></i> */}
          <a href="https://www.github.com">source code</a>
        </div>
      </div>
    </article>
  );
};

export default PortfolioProjects;
