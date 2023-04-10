import logo from '../images/logo.svg';
const Navbar = () => {
  return (
    <header id="home">
      {/* <!-- navbar --> */}
      <nav className="navbar">
        <div className="nav-center">
          {/* <!-- nav header --> */}
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="Backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- end of nav header -->
          <!-- nav links --> */}
          <ul className="nav-links" id="nav-links">
            {/* <!-- single link --> */}
            <li>
              <a href="#home" className="nav-link scroll-link">
                home
              </a>
            </li>
            {/* <!-- end of single link -->
            <!-- single link --> */}
            <li>
              <a href="#about" className="nav-link scroll-link">
                about
              </a>
            </li>
            {/* <!-- end of single link -->
            <!-- single link --> */}
            <li>
              <a href="#services" className="nav-link scroll-link">
                services
              </a>
            </li>
            {/* <!-- end of single link -->
            <!-- single link --> */}
            <li>
              <a href="#featured" className="nav-link scroll-link">
                featured
              </a>
            </li>
            {/* <!-- end of single link -->
            <!-- single link --> */}
            <li>
              <a href="#gallery" className="nav-link scroll-link">
                gallery
              </a>
            </li>
            {/* <!-- end of single link --> */}
          </ul>
          {/* <!-- end of nav link -->
          <!-- nav icons --> */}
          <ul className="nav-icons">
            {/* <!-- single icon --> */}
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            {/* <!-- end of single icon -->
            <!-- single icon --> */}
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            {/* <!-- end of single icon -->
            <!-- single icon --> */}
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            {/* <!-- end of single icon --> */}
          </ul>
          {/* <!-- end of nav icons --> */}
        </div>
      </nav>
      {/* <!-- end of navbar -->

      <!-- hero --> */}
      <div className="hero">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            explicabo vitae sunt at nisi!
          </p>
          <a href="#featured" className="btn hero-btn scroll-link">
            explore tours
          </a>
        </div>
      </div>
      {/* <!-- end of hero  --> */}
    </header>
  );
};
export default Navbar;
