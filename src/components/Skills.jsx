import { useEffect, useRef } from "react";
import Title from "./Title";
import { frontend } from "../data";
import { backend } from "../data";
import Skill from "./Skill";// Import the CSS file containing the styles

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElements =
              skillsSection.querySelectorAll(".skill-value");

            skillElements.forEach((element) => {
              element.classList.add("active");
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    observer.observe(skillsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={skillsRef} className="section skills">
      <Title title="skills" />
      <div className="section-center skills-center">
        <article>
          <h3>front end</h3>
          {frontend.map((skill) => {
            return <Skill {...skill} key={skill.id} />;
          })}
        </article>
        <article>
          <h3>back end</h3>
          {backend.map((skill) => {
            return <Skill {...skill} key={skill.id} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default Skills;
