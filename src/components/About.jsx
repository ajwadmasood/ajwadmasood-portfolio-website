import aboutImg from "../images/code.png";
import Title from "./Title";

const About = () => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img
            src={aboutImg}
            height="400px"
            className="hero-photo"
            alt="about img"
          />
        </article>
        <article className="about-info">
          <Title title="about" section="about" />
          <p>
            I am a recent graduate in Computer Science from NUST University,
            specializing in FullStack development. I am passionate about
            building web applications, with experience in both frontend and
            backend technologies.
          </p>
          <p>
            I have a strong foundation in the MERN stack and am passionate about
            building robust and scalable systems. I am dedicated to staying
            updated with the latest industry trends and continuously enhancing
            my skills to deliver exceptional digital experiences.
          </p>
          <a href="about.html" className="btn">
            about me
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
