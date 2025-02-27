"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css";
import "./customboot.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone ,faHouse } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Brand / Logo */}
              <a className="navbar-brand" href="/">
                Better
              </a>

              {/* Navbar Toggle Button */}
              <button
                className="navbar-toggler"
                type="button"
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Centered Menu */}
              <div
                className={`navbar-collapse ${isOpen ? "show" : ""}`}
                id="navbarNav"
              >
                <div className="navbar-nav">
                  <div className="nav-item">
                    <Link className="nav-link" href="#">
                      Buy
                    </Link>
                    <div className="buy-hide">
                      <div className="options">
                        Apply now{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Purchase rates{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Affordability calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Mortgage calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Rent vs buy calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Find an agent{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        VA loans{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Learning center{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <Link className="nav-link" href="#">
                      Refinance
                    </Link>
                    <div className="buy-hide">
                      <div className="options">
                        Apply now{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Purchase rates{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Affordability calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Mortgage calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Rent vs buy calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Find an agent{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        VA loans{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Learning center{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <Link className="nav-link" href="#">
                      HELOC
                    </Link>
                    <div className="buy-hide">
                      <div className="options">
                        Apply now{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Purchase rates{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Affordability calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Mortgage calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Rent vs buy calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Find an agent{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        VA loans{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Learning center{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <Link className="nav-link" href="/mort_calc">
                      Rates
                    </Link>
                    <div className="buy-hide">
                      <div className="options">
                        Apply now{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Purchase rates{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Affordability calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Mortgage calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Rent vs buy calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Find an agent{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        VA loans{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Learning center{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <Link className="nav-link" href="/mort_calc">
                      Better+
                    </Link>
                    <div className="buy-hide">
                      <div className="options">
                        Apply now{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Purchase rates{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Affordability calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Mortgage calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Rent vs buy calculator{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Find an agent{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        VA loans{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                      <div className="options">
                        Learning center{" "}
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section (Icon + Sign-in) */}
              <div className="navbar-right">
                <div className="icon">
                  <i className="bi bi-telephone">
                    <FontAwesomeIcon icon={faPhone} />
                  </i>{" "}
                  {/* Bootstrap Icon */}
                </div>
                <Link href="#">Sign in</Link>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <div className="line"></div>
        <footer className="bg-white-100 text-gray-700 padding">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-green-700 text-2xl font-bold">Better</h2>
              <p>
                Better is a family of companies serving all your homeownership
                needs.
              </p>
              <p className="font-bold text-green-700 mt-4">Better Mortgage</p>
              <p className="text-gray-500">
                We can’t wait to say "Welcome home." Apply 100% online, with
                expert customer support.
              </p>
              <p className="font-bold text-green-700 mt-4">Better Real Estate</p>
              <p className="text-gray-500">
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
              <p className="font-bold text-green-700 mt-4">Better Cover</p>
              <p className="text-gray-500">
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
              <p className="font-bold text-green-700 mt-4">Better inspect</p>
              <p className="text-gray-500">
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
              <p className="font-bold text-green-700 mt-4">
                Better Setetlement Services
              </p>
              <p className="text-gray-500">
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li>Home affordability calculator</li>
                <li>Mortgage calculator</li>
                <li>Free mortgage calculator</li>
                <li>Mortgage calculator with taxes</li>
                <li>Mortgage calculator with PMI</li>
                <li>Rent vs buy calculator</li>
                <li>HELOC payment calculator</li>
                <li>HELOC vs cash-out refinance calculator</li>
                <li>Buy a home</li>
                <li>Sell a home</li>
                <li>Get home inspection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Company</h3>
              <ul className="mt-2 space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Media</li>
                <li>Partner With Us</li>
                <li>Learning Center</li>
                <li>FAQs</li>
                <li>Investor Relations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Contact Us</h3>
              <p className="mt-2">hello@better.com</p>
              <p>415-523-8837</p>

              {/* <p className="mt-4 font-bold">Resources</p> */}
              <ul className="mt-2 space-y-2">
                <li>FAQ</li>
                <li>Glossary</li>
              </ul>

              <p className="mt-4 font-bold">Legal</p>
              <ul className="mt-2 space-y-2">
                <li>NMLS Consumer Access</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Disclosures & Licensing</li>
                <li>Affiliated Business</li>
                <li>Browser Disclaimer</li>
              </ul>
              <div className="footer-icons">
              <p><img src="./h1.png" alt="" /></p>
              <p><img src="./h2.png" alt="" /></p>
              </div>
            </div>
          </div>
          <div className="container mx-auto text-center mt-8 text-sm text-gray-600">
            <p>
              &copy; 2025 Better Home & Finance Holding Company and/or its
              affiliates.
            </p>
            <p>
              Better Mortgage Corporation provides home loans; Better Real
              Estate, LLC provides real estate services.
            </p>
            <p className="mt-4">
              <a href="#" className="text-blue-500">
                New York State Housing and Anti-Discrimination Notice
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-500">
                Texas Real Estate Commission Information About Brokerage
                Services
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
