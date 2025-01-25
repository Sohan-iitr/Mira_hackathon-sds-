import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              PODDO is your go-to platform for the latest podcasts and audio
              content. Stay tuned and connected with us for an enriching
              experience.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} PODDO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
