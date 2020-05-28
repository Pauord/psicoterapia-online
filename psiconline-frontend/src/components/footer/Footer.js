//@ts-check
import React from 'react';
import "../footer/footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
      
    

{/* <!-- Footer Links --> */}
<div className="text-center text-md-left footer-container ">

  {/* <!-- Footer links --> */}
  <div className="row text-center text-md-left mt-3 pb-3">

    {/* <!-- Grid column --> */}
    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold">Company name</h5>
      <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
        consectetur
        adipisicing elit.</p>
    </div>
    {/* <!-- Grid column --> */}

    <hr className="w-100 clearfix d-md-none"/>

    {/* <!-- Grid column --> */}
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
      <p>
      <Link to="/" className="nav-link">Home
      </Link>
      </p>
      <p>
      <Link to="/about" className="nav-link">Sobre mí
      </Link>
      </p>
      <p>
      <Link to="/blog" className="nav-link">Blog
      </Link>
      </p>
     
    </div>
    {/* <!-- Grid column --> */}

    <hr className="w-100 clearfix d-md-none"/>

    {/* <!-- Grid column --> */}
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold">Useful links</h5>
      <p>
      <Link to="/" className="nav-link">Workshops
      </Link>
      </p>
      <p>
      <Link to="/about" className="nav-link">Webinars
      </Link>
      </p>
      <p>
      <Link to="/blog" className="nav-link">Solicitá un turno
      </Link>
      </p>
     
      
    </div>

    {/* <!-- Grid column --> */}
    <hr className="w-100 clearfix d-md-none d-flex justify-content-center"/>

    {/* <!-- Grid column --> */}
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
      <p>
        <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
      <p>
        <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
      <p>
        <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
      <p>
        <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Footer links --> */}

  <hr/>

  {/* <!-- Grid row --> */}
  <div className="row d-flex align-items-center p-3">

    {/* <!-- Grid column --> */}
    <div className="col-md-7 col-lg-8">

      {/* <!--Copyright--> */}
      <p className="text-center text-md-left">© 2020 Copyright:
        <a href="https://mdbootstrap.com/">
          <strong> MDBootstrap.com</strong>
        </a>
      </p>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div className="col-md-5 col-lg-4 ml-lg-0 ">

      {/* <!-- Social buttons --> */}
      <div className="text-center text-md-right ">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm rgba-white-slight mx-1">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</div>
{/* <!-- Footer Links --> */}


{/* <!-- Footer --> */}
        </>
    );
}

export default Footer;



