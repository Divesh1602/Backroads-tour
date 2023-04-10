import img1 from '../images/pexels-sam-kolder-2387871.jpeg';
import img2 from '../images/tour-1.jpeg';
import img3 from '../images/tour-3.jpeg';
import img4 from '../images/tour-4.jpeg';
const Featured = () => {
  return (
    <section className="section" id="featured">
      {/* <!-- section-title --> */}
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      {/* <!-- end of section-title -->
      <!-- featured center --> */}
      <div className="section-center featured-center">
        {/* <!-- single tour 1 --> */}
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img1} className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          {/* <!-- tour info --> */}
          <div className="tour-info">
            <h4>glory of taj mahal</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quod veritatis tempora illo animi perspiciatis deserunt
              vel sapiente suscipit delectus.
            </p>
            <div className="tour-footer">
              <span>
                <i className="fas fa-map"></i> india
              </span>
              <p>11 days</p>
              <p>from $2900</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour 1 -->

        <!-- single tour 2 --> */}
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img2} className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          {/* <!-- tour info --> */}
          <div className="tour-info">
            <h4>tibet adventure</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quod veritatis tempora illo animi perspiciatis deserunt
              vel sapiente suscipit delectus.
            </p>
            <div className="tour-footer">
              <span>
                <i className="fas fa-map"></i> china
              </span>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour 1 -->

        <!-- single tour 3 --> */}
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img3} className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          {/* <!-- tour info --> */}
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quod veritatis tempora illo animi perspiciatis deserunt
              vel sapiente suscipit delectus.
            </p>
            <div className="tour-footer">
              <span>
                <i className="fas fa-map"></i> hong kong
              </span>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour 3 -->

        <!-- single tour 4 --> */}
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={img4} className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2020</p>
          </div>
          {/* <!-- tour info --> */}
          <div className="tour-info">
            <h4>Kruger National park</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus quod veritatis tempora illo animi perspiciatis deserunt
              vel sapiente suscipit delectus.
            </p>
            <div className="tour-footer">
              <span>
                <i className="fas fa-map"></i>
                kenya
              </span>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour 4 --> */}
      </div>
      <div className="tour-btn">
        <a href="#" className="btn">
          all tours
        </a>
      </div>
      {/* <!-- end of featured tours --> */}
    </section>
  );
};
export default Featured;
