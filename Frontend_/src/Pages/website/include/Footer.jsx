

function Footer() {

    return (
        <>
            <div className="site-footer">
                {/* Footer Top start */}
                <div className="footer-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="footer-lwf">
                                    <h3 className="footer-logo">
                                        <img src="images/logo.png" alt="Lawyer & Attorney" />
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                        aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
                                        posuere eros sapien id quam.{" "}
                                    </p>
                                    <ul className="footer-contact">
                                        <li>
                                            <i className="fa fa-phone" /> +1 1234 456789
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" /> info@companyname.com
                                        </li>
                                        <li>
                                            <i className="fa fa-fax" /> +1 123 123456
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="footer-lwf footer-menu">
                                    <h3 className="footer-lwf-title">Quick Links</h3>
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Company</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="blog-list.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">Gallery</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="footer-lwf footer-menu">
                                    <h3 className="footer-lwf-title">About Lawyer</h3>
                                    <ul>
                                        <li>
                                            <a href="practice-areas.html">Practice Areas List</a>
                                        </li>
                                        <li>
                                            <a href="practice-area-detail.html">Practice Areas Detail</a>
                                        </li>
                                        <li>
                                            <a href="attorney-list.html">Attorney List</a>
                                        </li>
                                        <li>
                                            <a href="attorney.html">Attorney Detail</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQs</a>
                                        </li>
                                        <li>
                                            <a href="testimonials.html">Testimonials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="footer-lwf">
                                    <h3 className="footer-lwf-title">Opening Hours</h3>
                                    <ul className="open-hours">
                                        <li>
                                            <span>Mon to Fri:</span>{" "}
                                            <span className="text-right">09:30AM to 05:30PM</span>
                                        </li>
                                        <li>
                                            <span>Sun:</span> <span className="text-right">Closed</span>
                                        </li>
                                    </ul>
                                    <div className="newsletter">
                                        <form>
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                defaultValue=""
                                                className="news-input"
                                            />
                                            <button type="submit" value="" className="news-btn">
                                                <i className="fa fa-envelope-o" aria-hidden="true" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer top end */}
                {/* copyright start */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-md-6">
                                Copyright © 2018 <span>Lawyer &amp; Attorney</span>. All Rights
                                Reserved
                            </div>
                            <div className="col-md-12 col-md-6 text-right">
                                Design &amp; Development By:{" "}
                                <a href="http://glowlogix.com/" target="_blank">
                                    GlowLogix
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright end */}
            </div>


        </>
    )
}

export default Footer