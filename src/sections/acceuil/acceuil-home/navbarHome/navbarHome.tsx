import * as React from "react";
import "./navbarHome.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/img/slacklogo.jpg";

interface INavbarHomeProps {}

const NavbarHome: React.FunctionComponent<INavbarHomeProps> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navhome">
      <div className="container py-3 ">
        <a className="navbar-brand text-white" href="#">
          <img src={logo} alt="voir logo" className="btn btn-secondary" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon="bars" className="toggler_Y" size="lg" />
        </button>
        <div
          className="navbar_item collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="lol nav-link active text-white "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="lol nav-link text-white" href="#">
                Card
              </a>
            </li>
            <li className="nav-item">
              <a className="lol nav-link text-white" href="#">
                Client
              </a>
            </li>
            <li className="nav-item">
              <a className="lol nav-link text-white" href="#">
                Professionnel
              </a>
            </li>
            <li className="nav-item">
              <a className="lol nav-link text-white" href="#">
                Faq
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
