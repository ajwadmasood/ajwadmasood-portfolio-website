import PortfolioProjects from "../components/PortfolioProjects";
import Title from "../components/Title";
import { portfolioProjects } from "../data";

const Projects = () => {
  return (
    <>
      <header class="projects-hero">
        <div class="section-title">
          <h1>my projects</h1>
          <div class="underline"></div>
        </div>
      </header>

      <section class="section">
        <div class="section-center projects-page-center">
          {portfolioProjects.map((project) => {
            // return <PortfolioProjects key={project.id} img={project.img} link={project.link} icon={project.icon} name={project.name} text={project.text} />;
            return (
              <PortfolioProjects
                key={project.id}
                img={project.img}
                name={project.name}
                firstPath={project.firstPath}
                secondPath={project.secondPath}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
