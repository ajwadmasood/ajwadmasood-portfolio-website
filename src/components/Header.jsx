import React from "react";
import myImg from "../images/mypic.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>i'm Ajwad</h1>
          <h4>FullStack Engineer</h4>
          <a href="contact.html" class="btn hero-btn">
            Contact me
          </a>
          <ul class="social-icons hero-icons">
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </article>
        <article class="hero-img">
          <img src={myImg} class="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
  );
};

export default Header;
