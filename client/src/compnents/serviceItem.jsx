const ServiceItem = (props) => {
    return (
      <div className="fadeInUp w-full" data-wow-delay="0.1s">
        <div className="service-item text-center pt-3">
          <div className="p-4">
            <i className={`fa fa-3x ${props.icon} text-primary mb-4`}></i>
            <h5 className="mb-3">{props.service}</h5>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceItem;