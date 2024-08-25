import React from 'react'
import { useLocation } from 'react-router-dom';
import PageTitle from './include/PageTitle';

function AttorneyDetails({ title }) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const data = query.get('data');
    const object = data ? JSON.parse(decodeURIComponent(data)) : null;
    console.log(object)

    return (
        <>

            <PageTitle title={title} />

            <div className="parallax-section">
                <div className="container">
                    <div className="attorneytop">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <img src="/assets/website/images/team/team-img1.jpg" className="lawimg" alt="" />
                                <button className='btn btn-danger' style={{marginTop:"30px"}}>Hire me</button>
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <h2>{object.firstName} {object.lastName}</h2>
                                <p>
                                    #TODO: will show here Bio data Paragrapgh
                                </p>
                                <ul className="address">
                                    <li>
                                        <i className="fa fa-phone" />
                                        {object.cell}
                                    </li>
                                    <li>
                                        <i className="fa fa-box" />
                                        {object.email}
                                    </li>
                                    <li>
                                        <i className="fa fa-home" />
                                        {object.address}
                                    </li>

                                </ul>

                                <div className="attorneydetail">
                                    <h1>Personal Statement</h1>
                                    <p>
                                        #TODO: will show here Persnoal Statement Paragrapgh

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="atorinfo">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Experience</h2>
                                <ul>
                                    <li>
                                        {object.expertise}
                                    </li>

                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2>Education</h2>
                                <ul>
                                    <li>{object.education}</li>

                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2>Practise Area</h2>
                                <ul>
                                    <li>{object.practiceArea}</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default AttorneyDetails