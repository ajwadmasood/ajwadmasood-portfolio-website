import Service from "./Service";
import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" section="skills" />
      <div className="services-center section-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
