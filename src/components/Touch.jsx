import Title from "./Title";
import video from "../videos/connect.mp4";
import image from "../images/project-1.jpeg";

const Touch = () => {
  return (
    <section className="connect">
      <video
        controls
        autoPlay
        muted
        loop
        className="video-container"
        poster={image}
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser does not support embedded videos
      </video>
      <div className="video-banner">
        <Title title="let's get in touch" section="skills" />
        <p className="video-text">
          I would love to connect with you and discuss any opportunities or
          collaborations. Feel free to reach out to me using the contact form.
          Whether you have a project in mind, a question, or simply want to say
          hello, I'm always excited to hear from like-minded individuals. Let's
          start a conversation and explore how we can work together to bring
          your ideas to life. Looking forward to connecting with you soon!
        </p>
        <a href="contact.html" className="btn">
          contact me
        </a>
      </div>
    </section>
  );
};

export default Touch;
