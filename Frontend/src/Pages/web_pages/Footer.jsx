
function Footer() {
  return (
    <>
    <footer id="footer-var2">
  <div id="footer-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="foo-block">
            <h5 className="widgettitle">About Us</h5>
            <div className="textwidget">
              <div className="textwidget">
                <p>
                Pakistanlawyer.com is serving since 1996, as a generic and scalable software product engineered to assist lawyers
                 and other professional in searching laws and case laws. It also facilitates general public 
                and law students to understand law and to provide them assistance. 
                It has the privileged to be the “First website on law in Pakistan”.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="foo-block">
            <h5 className="widgettitle">Contact</h5>
            <div className="textwidget">
              <div className="textwidget">
                <p>
                  Comsats university road Abbottabad Pakistan,
                  <br /> NY 10000, Pk
                </p>
                <p>
                  +92********
                  <br /> Amanat@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="foo-block">
            <h5 className="widgettitle">Quick Links</h5>
            <div className="textwidget custom-html-widget">
              <ul>
                <li>
                  {" "}
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Practice Areas</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="footer-social alignc">
        <li>
          <a className="social-facebook" href="/" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a className="social-twitter" href="/" target="_blank">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a className="social-linkedin" href="/" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
      <div className="foo-copyright alignc">
        The Hire Lawyer, Remote Consaltation!!
      </div>
    </div>
  </div>
</footer>
 
    </>
  )
}

export default Footer
