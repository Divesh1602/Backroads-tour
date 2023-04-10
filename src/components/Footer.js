const Footer = () => {
  return (
    <footer className="section footer">
      {/* <!-- footer links --> */}
      <ul className="footer-links">
        {/* <!-- single link --> */}
        <li>
          <a href="#home" className="footer-link scroll-link">
            home
          </a>
        </li>
        {/* <!-- end of single link -->
        <!-- single link --> */}
        <li>
          <a href="#about" className="footer-link scroll-link">
            about
          </a>
        </li>
        {/* <!-- end of single link -->
        <!-- single link --> */}
        <li>
          <a href="#services" className="footer-link scroll-link">
            services
          </a>
        </li>
        {/* <!-- end of single link -->
        <!-- single link --> */}
        <li>
          <a href="#featured" className="footer-link scroll-link">
            featured
          </a>
        </li>
        {/* <!-- end of single link -->
        <!-- single link --> */}
        <li>
          <a href="#gallery" className="footer-link scroll-link">
            gallery
          </a>
        </li>
        {/* <!-- end of single link --> */}
      </ul>
      {/* <!-- end of footer link --> */}

      {/* <!-- footer icons --> */}
      <ul className="footer-icons">
        {/* <!-- single icon --> */}
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
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
            className="footer-icon"
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
            className="footer-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
        {/* <!-- end of single icon --> */}
      </ul>
      {/* <!-- end of sfooter icons --> */}
      <p className="copyright">
        copyright &copy; Backroads travel tour company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
