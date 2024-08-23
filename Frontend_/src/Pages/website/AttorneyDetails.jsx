import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from './include/PageTitle'

function AttorneyDetails({ title }) {
    return (
        <>
            <Helmet><title>{title}</title></Helmet>



            <PageTitle title={title} />


            <div className="parallax-section">
                <div className="container">
                    <div className="attorneytop">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <img src="/assets/website/images/team/team-img1.jpg" className="lawimg" alt="" />
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <h2>JOHN DOE</h2>
                                <h3>Personal Lawyer</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    pellentesque massa vel lorem fermentum fringilla. Pellentesque id
                                    est et neque blandit ornare malesuada a mauris.
                                </p>
                                <ul className="address">
                                    <li>
                                        <i className="fa fa-phone" />
                                        +1 123 46578
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o" />
                                        <a href="#">jhon@Lawyer &amp; Attorney.com</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-skype" />
                                        jhon.attorney
                                    </li>
                                    <li>
                                        <i className="fa fa-globe" />
                                        <a href="#">www.Lawyer &amp; Attorney.com</a>
                                    </li>
                                </ul>
                            
                                <div className="attorneydetail">
                                    <h1>Personal Statement</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                        posuere scelerisque justo id feugiat. Pellentesque habitant morbi
                                        tristique senectus et netus et malesuada fames ac turpis egestas.
                                        In vel sem augue. Nullam imperdiet fringilla blandit. Ut ipsum
                                        nulla, viverra vitae tincidunt quis, ullamcorper quis ex. Aenean
                                        molestie dictum odio, vel molestie metus consequat fringilla.
                                        Fusce efficitur rutrum nisl, at mollis velit faucibus vitae.
                                        Maecenas quis malesuada dolor. Donec ornare blandit auctor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="atorinfo">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Experience</h2>
                                <ul>
                                    <li>
                                        Pellentesque nec tortor sit amet risus ornare malesuada sit amet
                                        eu felis.
                                    </li>
                                    <li>Proin eu leo mattis, mollis ligula et, tincidunt elit.</li>
                                    <li>Praesent convallis lectus vel ipsum blandit dictum.</li>
                                    <li>
                                        Suspendisse ac mauris sed sem pharetra venenatis sed ut risus.
                                    </li>
                                    <li>Quisque porttitor libero et consequat porta.</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h2>Education</h2>
                                <ul>
                                    <li>Etiam a ipsum mattis, suscipit turpis ut, placerat dolor.</li>
                                    <li>Quisque eget tellus id est aliquam dictum.</li>
                                    <li>
                                        Sed eu augue ullamcorper, pulvinar sem eget, ultricies justo.
                                    </li>
                                    <li>Nunc fringilla orci vel arcu facilisis aliquam.</li>
                                    <li>
                                        Vestibulum quis nisi porttitor, cursus odio vulputate, feugiat
                                        nibh.
                                    </li>
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