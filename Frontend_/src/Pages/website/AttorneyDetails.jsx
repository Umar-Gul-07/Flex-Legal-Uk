import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "./include/PageTitle";
import StripeCheckout from "react-stripe-checkout";
import api from "../../Utils/Axios";
import { toast } from "react-toastify";
import { server_ip } from "../../Utils/Data";
import { Store } from "../../Utils/Store";
import StarRatings from "react-star-ratings";

function AttorneyDetails({ title }) {
  const { state } = useContext(Store);
  const { UserInfo } = state;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const data = query.get("data");
  const object = data ? JSON.parse(decodeURIComponent(data)) : null;

  const [amount, setAmount] = useState(0);
  const [hasHired, setHasHired] = useState(false);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHireStatus = async () => {
      try {
        const { data } = await api.get(`/lawyer/${object._id}/isHired`, {
          params: { userId: UserInfo._id },
        });
        setHasHired(data.isHired);
        setLoading(false);
      } catch (error) {
        console.error("Error checking hire status", error);
        setLoading(false);
      }
    };

    checkHireStatus();
  }, [object, UserInfo]);

  const handleToken = async (token) => {
    try {
      if (amount <= 0) {
        toast.error("Please enter a valid amount greater than 0");
        return;
      }
      const result = await api.post("/payments/checkout", {
        token,
        amount: amount * 100,
        lawyerId: object._id,
        userId: UserInfo._id,
      });

      await api.patch(`/lawyer/${object._id}/hire`, { isHired: true });
      console.log(result);
      toast.success("Payment Completed Successfully");
      setHasHired(true);
    } catch (error) {
      console.error(
        "Payment Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(
        error.response ? error.response.data.error : "Payment failed"
      );
    }
  };

  // const handleRatingSubmit = async () => {
  //   if (!hasHired) {
  //     toast.error("You can only rate after hiring the lawyer.");
  //     return;
  //   }

  //   try {
  //     await api.post("/rating/ratingLawyer", {
  //       userId: UserInfo._id,
  //       lawyerId: object._id,
  //       rating
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${UserInfo.token}`  // Include token if required
  //       }
  //     });
  //     toast.success("Rating submitted successfully");
  //     setRating(0);
  //   } catch (error) {
  //     console.error("Error submitting rating", error);
  //     toast.error("Failed to submit rating");
  //   }
  // };

  return (
    <>
      <PageTitle title={title} />

      <div className="parallax-section">
        <div className="container">
          <div className="attorneytop">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <img
                  src={`${server_ip}/${object.image}`}
                  className="lawimg"
                  alt=""
                />
              </div>

              <div className="col-md-8 col-sm-8">
                <h2>
                  {object.firstName} {object.lastName}
                </h2>

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
                </div>

                <div className="payment-section">
                  <label htmlFor="amount">Enter Payment Amount (£):</label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount in pounds"
                    min="1"
                    className="form-control"
                    style={{ width: "200px", marginBottom: "20px" }}
                  />

                  <StripeCheckout
                    stripeKey="pk_test_51OGbliKue2i3LW4Npe6oAwbcfHyFSSUdcRPKRejkqG5z1WggCgT2MnaW3ayQaPV6gnVugP7w3C5crbJyug9weV1e00CESUwd87" // Test key
                    token={handleToken}
                    amount={amount * 100}
                    name={`${object.firstName} ${object.lastName}`}
                    billingAddress
                  />
                </div>

                {/* {hasHired && (
                  <div className="rating-section" style={{ marginTop: "20px" }}>
                    <h3>Rate this Lawyer</h3>
                    <div className="rating-controls">
                      <StarRatings
                        rating={rating}
                        starRatedColor="gold"
                        changeRating={(newRating) => setRating(newRating)}
                        numberOfStars={5}
                        name="rating"
                        starDimension="25px"
                        starSpacing="5px"
                      />
                      <button onClick={handleRatingSubmit} className="btn btn-primary" style={{ marginTop: "10px" }}>
                        Submit Rating
                      </button>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>

          <div className="atorinfo">
            <div className="row">
              <div className="col-md-4">
                <h2>Experience</h2>
                <ul>
                  <li>{object.expertise}</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Education</h2>
                <ul>
                  <li>{object.education}</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Practice Area</h2>
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
