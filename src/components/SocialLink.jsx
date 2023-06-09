import React from "react";

const SocialLink = ({ link, path }) => {
    const footerIconStyle = {
      color: "hsl(196, 78%, 60%)",
      // Add more styles here if needed
    };
  return (
    <li>
      <a href={link} className="footer-social-icon" style={footerIconStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d={path} />
        </svg>
      </a>
    </li>
  );
};

export default SocialLink;
