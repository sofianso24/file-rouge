const AboutItems = (props) => {
    return (
      <div className="col-span-1 sm:col-span-2">
        <p className="mb-0">
          <i className="fa fa-arrow-right text-primary me-2"></i>
          {props.content}
        </p>
      </div>
    );
  };
  
  export default AboutItems;