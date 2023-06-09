import React from 'react'

const Project = ({image, className_, title, client }) => {
    return (
      <a href="projects.html" className={className_}>
        <article className="project">
          <img src={image} alt="single project" className="project-img" />
          <div className="project-info">
            <h4>{title}</h4>
            <p>{client}</p>
          </div>
        </article>
      </a>
    );
}

export default Project
