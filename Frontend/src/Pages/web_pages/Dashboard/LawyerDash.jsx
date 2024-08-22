import React from "react";
import Sidebar from "./Sidebar";

function LawyerDash() {
  return (
    <div>
      <Sidebar />

      <div>
        <section className="dashboard-area">
          <div className="dashboard-nav dashboard--nav">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-content-wrap">
            <div className="dashboard-bread dashboard--bread dashboard-bread-2">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="breadcrumb-content">
                      <div className="section-heading">
                        <h2 className="sec__title font-size-30 text-white">
                          Lawyer Dashboard
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="breadcrumb-list text-right">
                      <ul className="list-items">
                        <li>
                          <a href="/" className="text-white">
                            Home
                          </a>
                        </li>
                        <li>Dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-bread">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="breadcrumb-content">
                      <div className="section-heading">
                        <h2 className="sec__title font-size-30 text-white">
                          Welcome Back!
                        </h2>
                      </div>
                    </div>
                    {/* end breadcrumb-content */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6">
                    <div className="breadcrumb-list text-right">
                      <ul className="list-items">
                        <li>
                          <a href="/" className="text-white">
                            Home
                          </a>
                        </li>
                        <li>Pages</li>
                        <li>Lawyer Dashboard</li>
                      </ul>
                    </div>
                    {/* end breadcrumb-list */}
                  </div>
                  {/* end col-lg-6 */}
                </div>
                {/* end row */}
                <div className="row mt-4">
                  <div className="col-lg-3 responsive-column-m">
                    <div className="icon-box icon-layout-2 dashboard-icon-box">
                      <div className="d-flex">
                        <div className="info-icon icon-element flex-shrink-0">
                          <i className="la la-shopping-cart" />
                        </div>
                        {/* end info-icon*/}
                        <div className="info-content">
                          <p className="info__desc">Hire Lawyer</p>
                          <h4 className="info__title">44</h4>
                        </div>
                        {/* end info-content */}
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-3 */}
                  <div className="col-lg-3 responsive-column-m">
                    <div className="icon-box icon-layout-2 dashboard-icon-box">
                      <div className="d-flex">
                        <div className="info-icon icon-element bg-2 flex-shrink-0">
                          <i className="la la-bookmark" />
                        </div>
                        {/* end info-icon*/}
                        <div className="info-content">
                          <p className="info__desc">Wishlist</p>
                          <h4 className="info__title">15</h4>
                        </div>
                        {/* end info-content */}
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-3 */}

                  {/* end col-lg-3 */}
                  <div className="col-lg-3 responsive-column-m">
                    <div className="icon-box icon-layout-2 dashboard-icon-box">
                      <div className="d-flex">
                        <div className="info-icon icon-element bg-4 flex-shrink-0">
                          <i className="la la-star" />
                        </div>
                        {/* end info-icon*/}
                        <div className="info-content">
                          <p className="info__desc">Reviews</p>
                          <h4 className="info__title">20</h4>
                        </div>
                        {/* end info-content */}
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-3 */}
                </div>
                {/* end row */}
              </div>
            </div>
            <div className="dashboard-main-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 responsive-column--m">
                    <div className="form-box">
                      <div className="form-title-wrap">
                        <h3 className="title">Statics Results</h3>
                      </div>
                      <div className="form-content">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className="" />
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className="" />
                          </div>
                        </div>
                        <canvas
                          id="bar-chart"
                          width={786}
                          height={392}
                          style={{ display: "block", width: 393, height: 196 }}
                          className="chartjs-render-monitor"
                        />
                      </div>
                    </div>
                    {/* end form-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column--m">
                    <div className="form-box dashboard-card">
                      <div className="form-title-wrap">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="title">Notifications</h3>
                          <button
                            type="button"
                            className="icon-element mark-as-read-btn ml-auto mr-0"
                            data-toggle="tooltip"
                            data-placement="left"
                            title=""
                            data-original-title="Mark all as read"
                          >
                            <i className="la la-check-square" />
                          </button>
                        </div>
                      </div>
                      <div className="form-content p-0">
                        <div className="list-group drop-reveal-list">
                          <a
                            href="/LawyerDash"
                            className="list-group-item list-group-item-action border-top-0"
                          >
                            <div className="msg-body d-flex align-items-center">
                              <div className="icon-element flex-shrink-0 mr-3 ml-0">
                                <i className="la la-bell" />
                              </div>
                              <div className="msg-content w-100">
                                <h3 className="title pb-1">
                                  Group Trip - Available
                                </h3>
                                <p className="msg-text">2 min ago</p>
                              </div>
                              <span
                                className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                data-original-title="Mark as read"
                              >
                                <i className="la la-check-square" />
                              </span>
                            </div>
                            {/* end msg-body */}
                          </a>
                          <a
                            href="/LawyerDash"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="msg-body d-flex align-items-center">
                              <div className="icon-element bg-1 flex-shrink-0 mr-3 ml-0">
                                <i className="la la-bell" />
                              </div>
                              <div className="msg-content w-100">
                                <h3 className="title pb-1">
                                  50% Discount Offer
                                </h3>
                                <p className="msg-text">2 min ago</p>
                              </div>
                              <span
                                className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                data-original-title="Mark as read"
                              >
                                <i className="la la-check-square" />
                              </span>
                            </div>
                            {/* end msg-body */}
                          </a>
                          <a
                            href="/LawyerDash"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="msg-body d-flex align-items-center">
                              <div className="icon-element bg-2 flex-shrink-0 mr-3 ml-0">
                                <i className="la la-check" />
                              </div>
                              <div className="msg-content w-100">
                                <h3 className="title pb-1">
                                  Your account has been created
                                </h3>
                                <p className="msg-text">1 day ago</p>
                              </div>
                              <span
                                className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                data-original-title="Mark as read"
                              >
                                <i className="la la-check-square" />
                              </span>
                            </div>
                            {/* end msg-body */}
                          </a>
                          <a
                            href="/LawyerDash"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="msg-body d-flex align-items-center">
                              <div className="icon-element bg-3 flex-shrink-0 mr-3 ml-0">
                                <i className="la la-user" />
                              </div>
                              <div className="msg-content w-100">
                                <h3 className="title pb-1">
                                  Your account updated
                                </h3>
                                <p className="msg-text">2 hrs ago</p>
                              </div>
                              <span
                                className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                data-original-title="Mark as read"
                              >
                                <i className="la la-check-square" />
                              </span>
                            </div>
                            {/* end msg-body */}
                          </a>
                          <a
                            href="/LawyerDash"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="msg-body d-flex align-items-center">
                              <div className="icon-element bg-4 flex-shrink-0 mr-3 ml-0">
                                <i className="la la-lock" />
                              </div>
                              <div className="msg-content w-100">
                                <h3 className="title pb-1">
                                  Your password changed
                                </h3>
                                <p className="msg-text">Yesterday</p>
                              </div>
                              <span
                                className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                data-toggle="tooltip"
                                data-placement="left"
                                title=""
                                data-original-title="Mark as read"
                              >
                                <i className="la la-check-square" />
                              </span>
                            </div>
                            {/* end msg-body */}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end form-box */}
                  </div>
                  {/* end col-lg-6 */}
                </div>
                {/* end row */}
                <div className="border-top mt-4" />
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="copy-right padding-top-30px">
                      <p className="copy__desc">
                        <span className="la la-heart" />{" "}
                        <a href="https://themeforest.net/user/techydevs/portfolio"></a>
                      </p>
                    </div>
                    {/* end copy-right */}
                  </div>
                  {/* end col-lg-7 */}
                  <div className="col-lg-5">
                    <div className="copy-right-content text-right padding-top-30px">
                      <ul className="social-profile">
                        <li>
                          <a href="/LawyerDash">
                            <i className="lab la-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="/LawyerDash">
                            <i className="lab la-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/LawyerDash">
                            <i className="lab la-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="/LawyerDash">
                            <i className="lab la-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end copy-right-content */}
                  </div>
                  {/* end col-lg-5 */}
                </div>
                {/* end row */}
              </div>
              {/* end container-fluid */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LawyerDash;
