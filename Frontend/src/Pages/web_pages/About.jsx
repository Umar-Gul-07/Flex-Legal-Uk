import React from "react";
import pic1 from "./images/team/team-5.jpg";
import pic2 from "./images/team/team-6.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="section-holder">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="intro-msg margin-b108">
                <div className="intro-normal">Our firm recovered</div>
                <div className="intro-2">
                  <span className="intro-small-italic">over</span>{" "}
                  <span className="intro-big-italic">$100.000.000</span>
                </div>
                <div className="intro-year">Since 1970</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 margin-bm32">
              <p>
                <span className="dropcap">W</span>e are passionate advocates for
                victims of serious accidents. Donec suscipit lobortis ornare.
                Aenean vel varius odio. Cras ligula odio, congue vel adipiscing
                non, congue vitae neque. Pellentesque adipiscing ultricies
                risus, auctor ullamcorper.
              </p>
            </div>
            <div className="col-lg-4 margin-bm32">
              <p>
                Sed elit nulla, varius vitae lacus hendrerit, pulvinar tincidunt
                lacus. Suspendisse quis purus ultrices, convallis felis ac,
                pulvinar tortor. Etiam adipiscing enim diam, vitae lacinia ipsum
                volutpat id. Sed varius nisl quis justo feugiat, a tempor enim
                pellentesque.
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                Nullam at ligula at velit adipiscing malesuada et venenatis
                enim. Praesent lacinia volutpat imperdiet. Integer ultricies
                aliquam auctor. Etiam gravida sagittis ipsum nec dictum. Nunc
                pretium est quis placerat congue. Nam dui lectus, pretium get
                elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-holder">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="images/home/office-1-1.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="images/home/office-2-1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="parallax section-holder"
        style={{ backgroundImage: 'url("images/home/home-bkg-1.jpg")' }}
      >
        <div className="container parallax-content">
          <div className="row">
            <div className="col-lg-8">
              <span className="heading-subtitle white">Legal Help</span>
              <h2 className="section-heading-title">Why Choose Us?</h2>
            </div>
          </div>

          <div className="row margin-b72">
            <div className="col-lg-6 margin-bm32">
              <p>
                Lorem ipsum dolor sit amet, debet dolore consectetuer eum eu,
                has no dicta munere gloriatur. Ea ubique atomorum nec. At eam
                phaedrum oportere. Mei brute primis omnium at, ius odio suscipit
                honestatis ut, dissentias dissentiet et usu. Sed errem noluisse
                comprehensam ei, eum no eripuit deserunt laboramus, te sea
                mentitum.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Harum saperet, ius paulo noluisse dignissim eu. Inimicus
                scripserit accommodare has ei, cum ut aliquam delicata. Ipsum
                etiam sit ad, salutatus tincidunt signiferumque in has, an mea
                vocent delicata. Eos enim dictas invenire ex. Amet eius cu vim,
                admodum mandamus imperdiet pro an, ei lorem tincidunt.
              </p>
            </div>
          </div>

          <div className="row alignc">
            <div className="col-sm-6 col-lg-3 margin-bm32">
              <div className="facts-title">10k</div>
              <p className="pcolor">Global Customers</p>
            </div>
            <div className="col-sm-6 col-lg-3 margin-bm32">
              <div className="facts-title">30</div>
              <p className="pcolor">Years of Experience</p>
            </div>
            <div className="col-sm-6 col-lg-3 margin-bm32">
              <div className="facts-title">24</div>
              <p className="pcolor">Team Experts</p>
            </div>
            <div className="col-sm-6 col-lg-3 margin-bm32">
              <div className="facts-title">17</div>
              <p className="pcolor">Awards &amp; Honors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-holder">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 alignc">
              <span className="heading-subtitle">Our Attorneys</span>
              <h2 className="section-heading-title">Professional Team</h2>
            </div>
          </div>
          {/* /row */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="lawyer-holder lawyer-3col">
                <a href="attorneys-single-page.html">
                  <img
                    src={pic1}
                    alt=""
                    style={{ width: "90%", height: 325 }}
                  />
                </a>
                <div className="lawyer-position">Founder</div>
                <h2 className="lawyer-title">
                  <a href="attorneys-single-page.html">Sarah Barrett</a>
                </h2>
                <div className="lawyer-excerpt">
                  Integer imperdiet purus urna, a volutpat turpis feugiat vitae.
                  Proin molestie in metus eu volutpat. Vestibulum vitae orci sit
                  amet.
                </div>
                <ul className="lawyer-social">
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="cdn-cgi/l/email-protection#cd" target="_blank">
                      <i className="far fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="lawyer-holder lawyer-3col">
                <a href="attorneys-single-page.html">
                  <img
                    src={pic2}
                    alt=""
                    style={{ width: "90%", height: 325 }}
                  />
                </a>
                <div className="lawyer-position">Senior Partner</div>
                <h2 className="lawyer-title">
                  <a href="attorneys-single-page.html">Mike Holmes</a>
                </h2>
                <div className="lawyer-excerpt">
                  Integer imperdiet purus urna, a volutpat turpis feugiat vitae.
                  Proin molestie in metus eu volutpat. Vestibulum vitae orci sit
                  amet.
                </div>
                <ul className="lawyer-social">
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="lawyer-holder lawyer-3col">
                <a href="attorneys-single-page.html">
                  <img
                    src={pic1}
                    alt=""
                    style={{ width: "90%", height: 325 }}
                  />
                </a>
                <div className="lawyer-position">Lawyer</div>
                <h2 className="lawyer-title">
                  <a href="attorneys-single-page.html">Teresa Perkins</a>
                </h2>
                <div className="lawyer-excerpt">
                  Integer imperdiet purus urna, a volutpat turpis feugiat vitae.
                  Proin molestie in metus eu volutpat. Vestibulum vitae orci sit
                  amet.
                </div>
                <ul className="lawyer-social">
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="cdn-cgi/l/email-protection#24" target="_blank">
                      <i className="far fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="view-more alignc">
            <a href="about-us.html">View More</a>
          </div>
        </div>
      </section>
      <section className="no-parallax section-holder section-home16">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="testimonials-container">
                <div className="owl-carousel owl-theme testimonials-slider">
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Curabitur sit amet ligula vitae lorem consequat
                        condimentum id in mauris. Vivamus pretium aliquet
                        sapien, ut commodo risus. Fusce erat orci, tempus vitae
                        mi ac, interdum sollicitudin felis. Suspendisse
                        elementum turpis vitae libero lobortis laoreet raesent
                        lacinia volutpat.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-1.jpg" alt="" />
                    </div>
                    <div className="client-name">John Doe</div>
                    <div className="client-company">Company Name</div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Sed sodales, odio eget adipiscing mattis, sapien purus
                        dapibus felis, sit amet mollis velit dolor eu lorem.
                        Vivamus condimentum nunc a quam lobortis tempus. Integer
                        porttitor, elit vestibulum facilisis accumsan, tortor
                        nisl volutpat sem, ac laoreet ligula metus ut felis.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-2.jpg" alt="" />
                    </div>
                    <div className="client-name">Giulia Doe</div>
                    <div className="client-company">Company Name</div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Cras eu nibh non dui mattis pretium id vitae erat.
                        Quisque justo nisi, malesuada eget lorem ac, posuere
                        dictum justo. Vestibulum vitae scelerisque ante. Duis at
                        mi vel odio fermentum accumsan at nec massa. Donec id
                        velit porta, mattis lorem vitae, convallis nunc.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-3.jpg" alt="" />
                    </div>
                    <div className="client-name">Paul Doe</div>
                    <div className="client-company">Company Name</div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Proin at venenatis dui. Morbi posuere ullamcorper libero
                        in posuere. Proin quis est consectetur, varius diam ut,
                        fringilla orci. Nunc ac lacus id ligula egestas
                        ultricies nec id odio. Maecenas lectus mauris, ultricies
                        ac aliquet at, fermentum eget leo.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-4.jpg" alt="" />
                    </div>
                    <div className="client-name">Mary Doe</div>
                    <div className="client-company">Company Name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
