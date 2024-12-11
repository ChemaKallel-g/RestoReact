import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-3">
      <div className="container">
        <div className="row">
          {/* Column 1: Food Application Info */}
          <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mb-md-0">
            <h4>Food Application</h4>
            <p>Healthy, Safe, and Fastest</p>
          </div>

          {/* Column 2: Contact Us */}
          <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mb-md-0">
            <h4>Contact Us</h4>
            <div className="mt-3 mb-2">
              <span>
                <i className="fa-brands fa-instagram fs-5"></i>
              </span>
              <span className="fs-6 mx-1">Instagram</span>
            </div>
            <div className="mb-2">
              <span>
                <i className="fa-brands fa-whatsapp fs-5"></i>
              </span>
              <span className="fs-6 mx-1">Whatsapp</span>
            </div>
            <div className="mb-2">
              <span>
                <i className="fa-brands fa-facebook fs-5"></i>
              </span>
              <span className="fs-6 mx-1">Facebook</span>
            </div>
            <div className="mb-2">
              <span>
                <i className="fa-regular fa-envelope fs-5"></i>
              </span>
              <span className="fs-6 mx-1">Mail</span>
            </div>
          </div>

          {/* Column 3: Address */}
          <div className="col-sm-12 col-md-4 col-lg-4 mb-3 mb-md-0">
            <h4>Address</h4>
            <pre>Tunis-Sfax Route de Tunis 3021</pre>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="text-center mt-3">
          <h5>Powered By Chema Kallel</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
