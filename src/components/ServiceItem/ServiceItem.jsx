import "./style.scss";

export const ServiceItem = ({ data }) => {
  const {service, description} = data;  
  return (
    <div className="service">
      <h4 className="subtitle_h4">{service}</h4>
      <p className="service_description">{description}</p>
    </div>
  );
};
