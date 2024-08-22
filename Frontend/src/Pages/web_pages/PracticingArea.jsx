import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Practicing() {
  return (
    <>
      <Navbar />
      <p></p>
      <br></br>

      <section className="section-holder">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 alignc">
              <span className="heading-subtitle">Legal Help</span>
              <h2 className="section-heading-title">Practice Areas</h2>
            </div>
          </div>
          {/* /row */}
          <div className="row practice-items-holder">
            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="fas fa-truck" />
                  </div>
                  <h3 className="practice-title">Auto Accidents</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="fas fa-hard-hat" />
                  </div>
                  <h3 className="practice-title">Construction Loans</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="far fa-building" />
                  </div>
                  <h3 className="practice-title">Real Estate</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="far fa-chart-bar" />
                  </div>
                  <h3 className="practice-title">Finance Law</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="far fa-money-bill-alt" />
                  </div>
                  <h3 className="practice-title">Tax Disputes</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="far fa-meh" />
                  </div>
                  <h3 className="practice-title">Child Abuse</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="fas fa-medkit" />
                  </div>
                  <h3 className="practice-title">Health Care</h3>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3 practice-item-4cols">
              <Link to="/Login">
                <div className="practice-item">
                  <div className="practice-icon">
                    <i className="fas fa-heart-broken" />
                  </div>
                  <h3 className="practice-title">Divorce</h3>
                </div>
              </Link>
            </div>
          </div>
          {/* /row */}
          <div className="view-more alignc margin-t72">
            <Link to="/Login">View More</Link>
          </div>
        </div>
        {/* /container */}
      </section>
      <Footer />
      {/* /SECTION 3*/}
      {/* SECTION 4*/}
    </>
  );
}

export default Practicing;
