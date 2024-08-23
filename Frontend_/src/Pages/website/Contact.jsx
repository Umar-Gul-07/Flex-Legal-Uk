import { Helmet } from "react-helmet"
import PageTitle from "./include/PageTitle"

function Contact({title}) {

    return (
        <>
        <Helmet><title>{title}</title></Helmet>


        
            <PageTitle  title={title}/>



            <div id="contact" className="parallax-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="section-title">
                        <h3>Get Free Quote</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet,
                            massa ac ornare feugiat, nunc dui auctor ipsum, sed posuere eros sapien
                            id quam.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-now">
                                <div className="contact">
                                    {" "}
                                    <span>
                                        <i className="fa fa-home" />
                                    </span>
                                    <div className="information">
                                        {" "}
                                        <strong>Address:</strong>
                                        <p>8500 lorem, New Ispum, Dolor amet sit 12301</p>
                                    </div>
                                </div>
                                {/* Contact Info */}
                                <div className="contact">
                                    {" "}
                                    <span>
                                        <i className="fa fa-envelope" />
                                    </span>
                                    <div className="information">
                                        {" "}
                                        <strong>Email Address:</strong>
                                        <p>investigate@your-site.com</p>
                                        <p>investigate@your-site.com</p>
                                    </div>
                                </div>
                                {/* Contact Info */}
                                <div className="contact">
                                    {" "}
                                    <span>
                                        <i className="fa fa-phone" />
                                    </span>
                                    <div className="information">
                                        {" "}
                                        <strong>Phone No:</strong>
                                        <p>+12 345 67 09</p>
                                        <p>+12 345 67 09</p>
                                    </div>
                                </div>
                                {/* Contact Info */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            {/* CONTACT FORM HERE */}
                            <div className="contact-form">
                                <form id="contact-form" className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <textarea
                                            className="form-control"
                                            rows={5}
                                            name="message"
                                            placeholder="Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button
                                            id="submit"
                                            type="submit"
                                            className="form-control"
                                            name="submit"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact