import React, { useState } from 'react'; // Import useState
import { useLocation } from 'react-router-dom';
import PageTitle from './include/PageTitle';
import StripeCheckout from "react-stripe-checkout";
import api from '../../Utils/Axios';
import { toast } from "react-toastify";
import { server_ip } from '../../Utils/Data';

function AttorneyDetails({ title }) {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const data = query.get('data');
    const object = data ? JSON.parse(decodeURIComponent(data)) : null;
    console.log(object);

    const [amount, setAmount] = useState(50); // Default amount

    const handleToken = async (token) => {
        try {
            const result = await api.post("/payments/checkout", {
                token,
                amount: amount * 100, // Convert to cents
            });
            toast.success("Payment Completed Successfully");
        } catch (error) {
            toast.error(error.message || 'Payment failed');
        }
    };

    return (
        <>
            <PageTitle title={title} />

            <div className="parallax-section">
                <div className="container">
                    <div className="attorneytop">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <img src="/assets/website/images/team/team-img1.jpg" className="lawimg" alt="" />

                                <StripeCheckout
                                    stripeKey="pk_test_51NGxZtJqBgewUbeBi5Kbi9ba2INMfEqsDWR0uXfWE71XeUaazaNlOypIHHbiDfqEPH45vIfJ6sthQW5uMfxKSFvQ009OIQIfzL"
                                    token={handleToken} // Corrected function name
                                    amount={50 * 100}
                                    name={object.firstName}
                                    billingAddress
                                />

                                <img src={`${server_ip}/${object.image}`} className="lawimg" alt="" />
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <h2>{object.firstName} {object.lastName}</h2>
                                <p>
                                    #TODO: will show here Bio data Paragraph
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
                                        #TODO: will show here Personal Statement Paragraph
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
    );
}

export default AttorneyDetails;
