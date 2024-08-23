import React from 'react'

function Team() {
    return (
        <>
            <div id="team" className="parallax-section">
                <div className="container">
                    {/* Dection Title */}
                    <div className="section-title">
                        <h3>
                            Our Attorneys <span>Team</span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="row">
                        {/* team 1 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="thumb-image">
                                    <img src="/assets/website/images/team/team-img1.jpg" className="animate" alt="" />
                                </div>
                                <h4>JOHN DOE</h4>
                                <h5>Personal Lawyer</h5>

                            </div>
                        </div>
                        {/* team 2 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="thumb-image">
                                    <img src="/assets/website/images/team/team-img2.jpg" className="animate" alt="" />
                                </div>
                                <h4>JASON DOE</h4>
                                <h5>Criminal Lawyer</h5>

                            </div>
                        </div>
                        {/* team 3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="thumb-image">
                                    <img src="/assets/website/images/team/team-img3.jpg" className="animate" alt="" />
                                </div>
                                <h4>JANE DOE</h4>
                                <h5>Family Lawyer</h5>

                            </div>
                        </div>
                        {/* team 4 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="thumb-image">
                                    <img src="/assets/website/images/team/team-img4.jpg" className="animate" alt="" />
                                </div>
                                <h4>MARTIN DOE</h4>
                                <h5>Employment Lawyer</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team