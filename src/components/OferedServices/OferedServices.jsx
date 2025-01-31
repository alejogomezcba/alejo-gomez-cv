import { ServiceItem } from '../ServiceItem/ServiceItem';

import "./style.scss";

export const OferedServices = ({ data }) => {
  const {title, OferedServices} = data;
  return (
    <div className='ofered_services'>
      <h2 className="subtitle_h2">{title}</h2>
      <div className='services-container' > 
        {OferedServices.map((service) => {
          return <ServiceItem data={service} key={service.id} />;
        })}
      </div>
    </div>
  )
};
