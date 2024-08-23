import { Link } from "react-router-dom"
import Team from "./include/Team"
import { Helmet } from "react-helmet"

function Home() {
    return (
        <>
            <Helmet><title>Home</title></Helmet>



            <div id="home2" className="parallax-section">
                {/*     <div class="overlay"></div>*/}
                <div className="container">
                    <div className="slide-text">
                        <h3>
                            What we can do?{" "}
                            <Link
                                to="#"
                                className="typewrite"
                                data-period={2000}
                                data-type='[ "Divorce", "Defamation", "Injury", "Accident", "Animal Bite" ]'
                            >
                                <span className="wrap">Div</span>
                            </Link>{" "}
                        </h3>
                        <h1>Welcome to Lawyer &amp; Attorney Template!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            suscipit mollis mauris, nec ullamcorper leo congue et. Nunc vulputate,
                            felis sed dictum sagittis, lorem enim auctor diam, ac laoreet tortor
                            ipsum ac sem.
                        </p>
                        <Link to="#about" className="btn btn-default section-btn">
                            Get Started
                        </Link>{" "}
                    </div>
                </div>
            </div>



            <div className="howitwrap" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/assets/website/images/about-us.jpg" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="stcontent">
                                {/* title start */}
                                <div className="section-title">
                                    <h3>
                                        Welcome to <span>Lawyer &amp; Attorney</span>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                        aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed
                                        posuere eros sapien id quam.{" "}
                                    </p>
                                </div>
                                {/* title end */}
                                <ul className="howlist">
                                    {/*step 1*/}
                                    <li>
                                        <div className="howbox">
                                            <div className="iconcircle">
                                                <i className="fa fa-university" aria-hidden="true" />
                                            </div>
                                            <h4>Protect Your Rights</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incidid ut labore
                                            </p>
                                        </div>
                                    </li>
                                    {/*step 1 end*/}
                                    {/*step 2*/}
                                    <li>
                                        <div className="howbox">
                                            <div className="iconcircle">
                                                <i className="fa fa-handshake-o" aria-hidden="true" />
                                            </div>
                                            <h4>Medical Treatment</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incidid ut labore
                                            </p>
                                        </div>
                                    </li>
                                    {/*step 2 end*/}
                                    {/*step 3*/}
                                    <li>
                                        <div className="howbox">
                                            <div className="iconcircle">
                                                <i className="fa fa-male" aria-hidden="true" />
                                            </div>
                                            <h4>We Fight for Justice</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incidid ut labore
                                            </p>
                                        </div>
                                    </li>
                                    {/*step 3 end*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div id="practicearea" className="parallax-section">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title">
                        <h3>
                            Practice <span>Areas</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet,
                            massa ac ornare feugiat, nunc dui auctor ipsum, sed posuere eros sapien
                            id quam.
                        </p>
                    </div>
                    <div className="row">
                        {/* Service 1 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-img">
                                    <img src="/assets/website/images/lawyer/1.jpg" className="animate" alt="" />
                                </div>
                                <h4>Divorce Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-img">
                                    <img src="/assets/website/images/lawyer/2.jpg" className="animate" alt="" />
                                </div>
                                <h4>Litigation</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-img">
                                    <img src="/assets/website/images/lawyer/3.jpg" className="animate" alt="" />
                                </div>
                                <h4>Accident Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-img">
                                    <img src="/assets/website/images/lawyer/4.jpg" className="animate" alt="" />
                                </div>
                                <h4>Drug Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 5 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-img">
                                    <img src="/assets/website/images/lawyer/5.jpg" className="animate" alt="" />
                                </div>
                                <h4>Personal Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 6 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-img">
                                    <img src="/assets/website/images/lawyer/6.jpg" className="animate" alt="" />
                                </div>
                                <h4>Criminal Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="servicesbox bg1">
                <div className="container">
                    <div className="section-title">
                        <h3>Personal Injury Lawyers</h3>
                    </div>
                    <div className="ctoggle">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            tincidunt mauris est, in faucibus dui viverra et. Aliquam finibus
                            vestibulum elit, at pharetra nisl congue vel. Nunc pretium posuere justo
                            pretium fringilla. Sed volutpat risus non rhoncus convallis. Sed
                            fermentum est at hendrerit pellentesque. Mauris nec leo euismod,
                            sagittis mauris in, posuere est...
                        </p>
                        <Link to="#" className="readmore">
                            Read More <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        </Link>{" "}
                    </div>
                </div>
            </div>



            <Team />



            <div className="taglinewrap">
                <div className="container">
                    <h2>Call Today For A FREE Consultation</h2>
                    <p>
                        Sed sed neque laoreet, rhoncus libero id, pharetra est. Sed ut neque est.
                        Maecenas et est sagittis, mollis risus dignissim, mattis dolor.{" "}
                    </p>
                    <Link to="#">
                        <i className="fa fa-phone" aria-hidden="true" /> Contact Us Now
                    </Link>{" "}
                </div>
            </div>


        </>
    )
}

export default Home