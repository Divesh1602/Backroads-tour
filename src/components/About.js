import about from '../images/about.jpeg';

const About = () => {
  return (
    <section className="section" id="about">
      {/* <!-- section-title --> */}
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>
      {/* <!-- end of section-title --> */}

      <div className="section-center about-center">
        {/* <!-- about image --> */}
        <article className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </article>
        {/* <!-- end of about image -->
        <!-- about info --> */}
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem, eaque non quisquam adipisci numquam repellendus deleniti
            placeat error laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            delectus autem ab omnis nam voluptate repellat hic in est ex.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
        {/* <!-- end of about info --> */}
      </div>
    </section>
  );
};
export default About;
