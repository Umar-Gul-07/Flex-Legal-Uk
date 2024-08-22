import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


function Contact() {

  return (
    
    <>
    <Navbar />


    

    <section
    
      className="parallax section-holder"
      style={{ backgroundImage: 'url("images/blog/blog-7.jpg")' }}
    >
      <div className="container parallax-content">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 alignc">
            <span className="heading-subtitle white">Legal Services</span>
            <h2 className="margin-b16">
              Did we mention first consultation is free?
            </h2>
            <p>
              Appareat reformidans his te. Mundi erroribus ad eum, mea ut dicam
              nostro copiosae. Eligendi accusamus nec ex. Et usu ludus vitae
              tritani, suas deleniti pertinacia et quo. Duo veritus mediocrem
              ex, vidit fabellas vis ea.
            </p>
            <div className="view-more view-more-white margin-t54 alignc">
              <a href="/login">Make an Appointment</a>
            </div>
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </section>
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
                  40 KM away from Atd city, Mandian
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
                <p className="icon-box-description">03331241033</p>
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
    <Footer/>
    {/* /SECTION 9*/}
    </>
  )
}

export default Contact;
