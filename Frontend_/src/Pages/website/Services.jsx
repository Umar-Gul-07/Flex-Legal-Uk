import React from 'react'
import PageTitle from './include/PageTitle'
import { Helmet } from 'react-helmet'

function Services({ title }) {
    return (
        <>
            <Helmet><title>{title}</title></Helmet>



            <PageTitle title={title} />



            <div id="service" className="parallax-section">
                <div className="container">
                    <div className="row">
                        {/* Service 1 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-car" aria-hidden="true" />
                                </div>
                                <h4>Car Accident</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-shield" aria-hidden="true" />
                                </div>
                                <h4>Security Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-code" aria-hidden="true" />
                                </div>
                                <h4>Personal Injury</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 4 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                </div>
                                <h4>Criminal Defence</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 5 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-cloud" aria-hidden="true" />
                                </div>
                                <h4>Brain Injury</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 6 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-motorcycle" aria-hidden="true" />
                                </div>
                                <h4>Motorcycle Accident</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 1 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-car" aria-hidden="true" />
                                </div>
                                <h4>Car Accident</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 2 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-shield" aria-hidden="true" />
                                </div>
                                <h4>Security Law</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-code" aria-hidden="true" />
                                </div>
                                <h4>Personal Injury</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 4 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                </div>
                                <h4>Criminal Defence</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 5 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-cloud" aria-hidden="true" />
                                </div>
                                <h4>Brain Injury</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                        {/* Service 6 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="service-thumb">
                                <div className="thumb-icon">
                                    <i className="fa fa-motorcycle" aria-hidden="true" />
                                </div>
                                <h4>Motorcycle Accident</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    pellentesque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services