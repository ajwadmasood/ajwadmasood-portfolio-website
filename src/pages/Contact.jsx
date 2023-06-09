import React from "react";

const Contact = () => {
  return (
    <section class="section single-page">
      <div class="section-title">
        <h1>contact</h1>
        <div class="underline"></div>
      </div>
      <div class="section-center page-info" style={{ width: "500px" }}>
        <p>
          If you are looking to get ahold of me, you can send me an email at
          <a
            href="mailto:ajwadmasood@hotmail.com"
            style={{ textTransform: "lowercase" }}
          >
            {" "}
            ajwadmasood@hotmail.com
          </a>
        </p>
        <p>
          You can also reach me on LinkedIn at
          <a href="https://www.https://www.linkedin.com/in/ajwad-masood-3a40a7125/">
            <span> </span>Ajwad Masood{" "}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
