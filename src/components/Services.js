const Services = () => {
  return (
    <section className="section services" id="services">
      {/* <!-- section-title --> */}
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      {/* <!-- end of section-title --> */}
      <div className="section-center services-center">
        {/* <!-- single card 1 --> */}
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, repellendus.
            </p>
          </div>
        </article>
        {/* <!-- end of single card 1 -->

        <!-- single card 2 --> */}
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">endless biking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              eos.
            </p>
          </div>
        </article>
        {/* <!-- end of single card 2 --> */}

        {/* <!-- single card 3 --> */}
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing confort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              esse..
            </p>
          </div>
        </article>
        {/* <!-- end of single card 3 --> */}
      </div>
    </section>
  );
};
export default Services;
