import React from 'react'
import { Link } from 'react-router-dom';

import slider1 from './images/home/adv3.jpg';
import slider2 from './images/home/slider-1.jpg';
import slider3 from './images/home/adv2.jpg';
import pic1 from './images/team/team-3.jpg';
import pic2 from './images/team/team-5.jpg';
import pic3 from './images/team/team-6.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


function Home() {


  return (
    <>
      <Navbar />

      <div

        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block"
              src={slider1}
              alt="First slide"
              style={{ width: "100%", height: 500 }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={slider2}
              alt="Second slide"
              style={{ width: "100%", height: 500 }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={slider3}
              alt="Third slide"
              style={{ width: "100%", height: 500 }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>



      {/* /HOME SLIDER */}
      {/* PAGE CONTENT */}

      {/* SECTION 1*/}
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
                <a href="/Search" class="intro-year">Find Lawyer</a>                
              </div>
            </div>
          </div>
          {/* /row */}
          <div className="row">
            <div className="col-lg-4 margin-bm32">
              <p>
                <span className="dropcap">W</span>elcome to [Hire_Lawyer],
                where justice meets expertise. Our team of seasoned lawyers is
                dedicated to providing unparalleled legal services tailored to
                meet your unique needs. With a focus on integrity, professionalism,
                and a client-first approach, we stand as advocates for your
                rights in every legal matter.

              </p>
            </div>
            <div className="col-lg-4 margin-bm32">
              <p>
                The provided text is already in English. If you have a specific phrase or
                sentence you'd like me to translate
                from another language to English, please provide it, and I'll be happy to help.
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                we understand that each case is as unique as the individual it
                represents. Whether you're seeking legal advice, representation
                in court, or assistance with complex legal issues, our committed
                team is here for you. We strive to achieve the best possible outcomes
                for our clients, working tirelessly to navigate the legal landscape on your behalf.
              </p>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </section>
      {/* /SECTION 1*/}
      {/* SECTION 2*/}
      <section className="section-holder">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img className="img-fluid" src="images/home/office-1-1.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="images/home/office-2-1.jpg" alt="" />
          </div>
        </div>
        {/* /row */}
      </section>
      {/* /SECTION 2*/}
      {/* SECTION 3*/}
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
            <Link to="/Search">
              <div className="practice-item">
                <div className="practice-icon">
                  <i className="fas fa-truck" />
                </div>
                <h3 className="practice-title">Auto Accidents</h3>
              </div>
            </Link>
          </div>
         


          <div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
    <div className="practice-item">
      <div className="practice-icon">
        <i className="fas fa-hard-hat" />
      </div>
      <h3 className="practice-title">Construction Loans</h3>
    </div>
  </Link>
</div>



<div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
    <div className="practice-item">
      <div className="practice-icon">
        <i className="far fa-building" />
      </div>
      <h3 className="practice-title">Real Estate</h3>
    </div>
  </Link>
</div>



<div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
    <div className="practice-item">
      <div className="practice-icon">
        <i className="far fa-chart-bar" />
      </div>
      <h3 className="practice-title">Finance Law</h3>
    </div>
  </Link>
</div>


      <div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
    <div className="practice-item">
      <div className="practice-icon">
        <i className="far fa-money-bill-alt" />
      </div>
      <h3 className="practice-title">Tax Disputes</h3>
    </div>
  </Link>
</div>


<div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
    <div className="practice-item">
      <div className="practice-icon">
        <i className="far fa-meh" />
      </div>
      <h3 className="practice-title">Child Abuse</h3>
    </div>
  </Link>
</div>



<div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
    <div className="practice-item">
      <div className="practice-icon">
        <i className="fas fa-medkit" />
      </div>
      <h3 className="practice-title">Health Care</h3>
    </div>
  </Link>
</div>



<div className="col-md-6 col-lg-3 practice-item-4cols">
  <Link to="/Search">
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
  <Link to="/Search">View More</Link>
</div>

        </div>
        {/* /container */}
      </section>
      {/* /SECTION 3*/}
      {/* SECTION 4*/}
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
          {/* /row */}
          <div className="row margin-b72">
            <div className="col-lg-6 margin-bm32">
              <p>
                1. Expertise and Specialization:
                At [Law Firm Name], our team consists of seasoned legal professionals with expertise
                in various fields. Our attorneys specialize in [list specific areas, e.g., personal

                injury, family law, criminal defense], ensuring that you
                receive knowledgeable and focused representation tailored to your unique case.

                2. Proven Track Record:
                We have a demonstrated track record of success in achieving favorable outcomes
                for our clients. Our dedication to excellence and commitment to winning cases have earned us a reputation for being a trusted legal ally. Explore our case results to see how we've helped others facing similar legal challenges.{" "}
                <a href="/Search" style={{color : "red"}}> Click To Hire</a>                

              </p>
            </div>
            <div className="col-lg-6">
              <p>
                3. Personalized Legal Strategies:
                Every case is unique, and we understand that one size does not fit all. Our attorneys take
                the time to understand your specific situation and tailor legal strategies to address your
                individual needs. We prioritize
                personalized attention to ensure the best possible outcome for your case.

                4. Client-Centric Approach:
                Your peace of mind matters to us. Our client-centric approach means you are
                not just another case — you are a valued individual with concerns that deserve
                attention. We maintain open lines of communication, keeping you informed and
                involved throughout the legal process.
              </p>
            </div>
          </div>
          {/* /row */}
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
          {/* /row */}
        </div>
        {/* /container */}
      </section>
      {/* /SECTION 4*/}
      {/* SECTION 5*/}
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
                    src={pic2}
                    alt=""
                    style={{ width: "90%", height: 325 }}
                  />
                </a>
                <div className="lawyer-position">Founder</div>
                <h2 className="lawyer-title">
                  <a href="attorneys-single-page.html">Qaiser</a>
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
                    <a
                      href="cdn-cgi/l/email-protection#cd"
                      target="_blank"
                    >
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
                    src={pic1}
                    alt=""
                    style={{ width: "90%", height: 325 }}
                  />
                </a>
                <div className="lawyer-position">Senior Partner</div>
                <h2 className="lawyer-title">
                  <a href="attorneys-single-page.html">Amanat Hussain</a>
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
                    src={pic3}
                    alt=""
                    style={{ width: "90%", height: 325 }}
                  />
                </a>
                <div className="lawyer-position">Lawyer</div>
                <h2 className="lawyer-title">
                  <a href="attorneys-single-page.html">Ahmad shah</a>
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
                    <a
                      href="cdn-cgi/l/email-protection#24"
                      target="_blank"
                    >
                      <i className="far fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
          <div className="view-more alignc">
            <a href="/login">View More</a>
          </div>
        </div>
        {/* /container */}
      </section>
      {/* /SECTION 5*/}
      {/* SECTION 6*/}
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
                        condimentum id in mauris. Vivamus pretium aliquet sapien,
                        ut commodo risus. Fusce erat orci, tempus vitae mi ac,
                        interdum sollicitudin felis. Suspendisse elementum turpis
                        vitae libero lobortis laoreet raesent lacinia volutpat.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-1.jpg" alt="" />
                    </div>
                    <div className="client-name">Amanat Hussain</div>
                    <div className="client-company">Company Name</div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Sed sodales, odio eget adipiscing mattis, sapien purus
                        dapibus felis, sit amet mollis velit dolor eu lorem.
                        Vivamus condimentum nunc a quam lobortis tempus. Integer
                        porttitor, elit vestibulum facilisis accumsan, tortor nisl
                        volutpat sem, ac laoreet ligula metus ut felis.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-2.jpg" alt="" />
                    </div>
                    <div className="client-name">Ahmad</div>
                    <div className="client-company">Company Name</div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Cras eu nibh non dui mattis pretium id vitae erat. Quisque
                        justo nisi, malesuada eget lorem ac, posuere dictum justo.
                        Vestibulum vitae scelerisque ante. Duis at mi vel odio
                        fermentum accumsan at nec massa. Donec id velit porta,
                        mattis lorem vitae, convallis nunc.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-3.jpg" alt="" />
                    </div>
                    <div className="client-name">Qaiser</div>
                    <div className="client-company">Company Name</div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-desc">
                      <i className="fas fa-quote-left" />
                      <h5>
                        Proin at venenatis dui. Morbi posuere ullamcorper libero
                        in posuere. Proin quis est consectetur, varius diam ut,
                        fringilla orci. Nunc ac lacus id ligula egestas ultricies
                        nec id odio. Maecenas lectus mauris, ultricies ac aliquet
                        at, fermentum eget leo.
                      </h5>
                    </div>
                    <div className="testimonial-client">
                      {" "}
                      <img src="images/testimonials/client-4.jpg" alt="" />
                    </div>
                    <div className="client-name">Amanat</div>
                    <div className="client-company">Company Name</div>
                  </div>
                </div>
              </div>
              {/* /testimonials-container */}
            </div>
          </div>
        </div>
        {/* /container */}
      </section>
      {/* /SECTION 6*/}
      {/* SECTION 7*/}

      {/* /SECTION 8*/}
      {/* SECTION 9*/}
      <section className="section-holder">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 margin-bm54">
              <span className="heading-subtitle">Contact Us</span>
              <h2 className="section-heading-title margin-b16">
                Free Case Evaluation
              </h2>
              <p>
                Aenean facilisis, neque a varius porttitor, risus dui tempus
                libero, dictum aliquet justo enim vitae lorem. Aliquam lacinia
                lacinia mi ac convallis. Nulla et lacus et risus laoreet
                consectetur.
              </p>
              <div className="icon-box-wrapper">
                <div className="icon-box-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="icon-box-content">
                  <div className="icon-box-title">OFFICE</div>
                  <p className="icon-box-description">
                   comsats road Abbottabd
                  </p>
                </div>
              </div>
              {/* /icon-box-wrapper */}
              <div className="icon-box-wrapper">
                <div className="icon-box-icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="icon-box-content">
                  <div className="icon-box-title">PHONE</div>
                  <p className="icon-box-description">+923********</p>
                </div>
              </div>
              {/* /icon-box-wrapper */}
              <div className="icon-box-wrapper">
                <div className="icon-box-icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="icon-box-content">
                  <div className="icon-box-title">EMAIL</div>
                  <p className="icon-box-description">
                    <a
                      href="https://matchthemes.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="e5868a8b91848691a5809d8488958980cb868a88"
                    >
                      [email&nbsp;protected]
                    </a>
                  </p>
                </div>
              </div>
              {/* /icon-box-wrapper */}
              <div className="gmaps margin-t54">

              </div>
            </div>
            <div className="col-lg-6">
              <div id="contact-form-holder">
                <form
                  method="post"
                  id="contact-form"
                  action="https://matchthemes.com/demohtml/lawyers/include/contact-process.php"
                >
                  <div className="margin-b32">
                    <label>Name</label>
                    <input type="text" name="name" className="comm-field" />
                  </div>
                  <div className="margin-b32">
                    <label>Email</label>
                    <input type="text" name="email" className="comm-field" />{" "}
                  </div>
                  <div className="margin-b32">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="comm-field"
                    />{" "}
                  </div>
                  <div className="margin-b32">
                    <label>Message</label>
                    <textarea
                      name="message"
                      id="msg-contact"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <p className="antispam">
                    Leave this empty: <input type="text" name="url" />
                  </p>
                  <p>
                    <input
                      type="submit"
                      defaultValue="Send message"
                      id="submit"
                    />
                  </p>
                </form>
              </div>
              {/* contact-form-holder*/}
              <div id="output-contact" />
            </div>

          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </section>
      <Footer />
      {/* /SECTION 9*/}
    </>
  )
}

export default Home
