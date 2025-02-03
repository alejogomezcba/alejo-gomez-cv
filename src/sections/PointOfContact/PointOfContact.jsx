import './style.scss';


const PointOfContact = ({data}) => {

  return (
    <div className='contact-container'>
    <h4 className='subtitle_h4'>Puntos de contacto</h4>
    <div className="contact_points" >
          {data.map(item => ( 
            <a
                href={item.href}
                target="_blank"
                key={item.name}
                rel="noreferrer"
            >
                <img
                  className={`contact_icon icon_${item.name}`}
                  alt={`${item.name} icon`}
                  src={item.icon }
                />
            </a>
           ))}
    </div>
    </div>
  )
};

export default PointOfContact;

