const Title = ({ title, section }) => {
  return (
    <div
      className={
        section === "about" ? "section-title about-title" : "section-title"
      }
    >
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
