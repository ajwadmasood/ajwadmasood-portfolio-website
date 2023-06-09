const Service = ({ path, title, text }) => {
  return (
    <article className="service">
      <svg
        className="service-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 640 512"
      >
        <path d={path} />
      </svg>
      <h4>{title}</h4>
      <div className="underline"></div>
      <p>{text}</p>
    </article>
  );
};

export default Service;
