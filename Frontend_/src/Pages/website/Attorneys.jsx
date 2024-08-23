import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from './include/PageTitle'
import { teamMembers } from '../../Utils/Data'
import { Link } from 'react-router-dom'

function Attorneys({ title }) {
    return (
        <>
            <Helmet><title>{title}</title></Helmet>



            <PageTitle title={title} />


            <div className="parallax-section">
                <div className="container">
                    <div className="row">

                        {teamMembers.map((object) => (
                            <div className="col-md-3 col-sm-6">
                                <Link to={`/attorney-details/:${object.name}`}>

                                    <div className="team-thumb">
                                        <div className="thumb-image">
                                            <img src="/assets/website/images/team/team-img1.jpg" className="animate" alt="Team Member 1" />
                                        </div>
                                        <h4>{object.name}</h4>
                                        <h5>{object.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Attorneys