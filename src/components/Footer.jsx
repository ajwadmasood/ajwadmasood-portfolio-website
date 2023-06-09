import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icons">
        {socialLinks.map((singlelink) => {
          return <SocialLink {...singlelink} key={singlelink.id} />;
        })}
      </ul>
      <p>
        &copy; <span id="date"></span> Ajwad Masood. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
