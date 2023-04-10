import img1 from '../images/pexels-sam-kolder-2387871.jpeg';
import img2 from '../images/tour-1.jpeg';
import img3 from '../images/tour-2.jpeg';
import img4 from '../images/tour-3.jpeg';
import img5 from '../images/tour-4.jpeg';
import img6 from '../images/tour-5.jpeg';
const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-center">
        {/* <!-- single item 1--> */}
        <article className="gallery-img-container">
          <img src={img1} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 1-->

        <!-- single item 2--> */}
        <article className="gallery-img-container">
          <img src={img2} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 2 -->

        <!-- single item 3--> */}
        <article className="gallery-img-container">
          <img src={img3} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 3-->

        <!-- single item 4--> */}
        <article className="gallery-img-container">
          <img src={img4} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 4-->

        <!-- single item 5--> */}
        <article className="gallery-img-container">
          <img src={img5} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 5-->

        <!-- single item 6--> */}
        <article className="gallery-img-container">
          <img src={img6} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 6-->

        <!-- single item 7--> */}
        <article className="gallery-img-container">
          <img src={img3} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 7-->

        <!-- single item 8--> */}
        <article className="gallery-img-container">
          <img src={img1} className="gallery-img" alt="" />
          <a href="#" className="gallery-icon">
            <i className="fas fa-search"></i>
          </a>
        </article>
        {/* <!-- end of single item 8--> */}
      </div>
    </section>
  );
};
export default Gallery;
