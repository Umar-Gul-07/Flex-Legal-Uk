import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../Services/Axios";
import StripeCheckout from "react-stripe-checkout";

function MainDashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get("/lawyer/dashboard");
        setData(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtered = data.filter((item) => {
      const lowercaseFilter = filter.toLowerCase();
      const lowercaseAddress = (item.address || "").toLowerCase();
      const lowercasePracticeArea = (item.practiceArea || "").toLowerCase();
      const lowercaseExpertise = (item.expertise || "").toLowerCase();

      return (
        lowercaseAddress.includes(lowercaseFilter) ||
        lowercasePracticeArea.includes(lowercaseFilter) ||
        lowercaseExpertise.includes(lowercaseFilter)
      );
    });

    setFilteredData(filtered);
  };

  const handletoken = async (token, address) => {
    try {
      const result = await api.post("/payments/checkout", {
        token,
        data,
        id: 1,
      });
      toast.success("Payment Completed Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
      <section className="dashboard-area">

      <div className="dashboard-nav dashboard--nav" style={{ width: '100%', backgroundColor: '#yourBackgroundColor' }}>
  <div className="container-fluid" >
    <div className="row">
      <div className="col-lg-12">
        <div className="menu-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo mr-5">
            <a href="Dashboard">
              <img src="/images/team8.jpg" alt="" />
            </a>
          </div>

          <div className="contact-form-action" style={{ flex: '1', marginLeft: '20px' }}>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-group mb-1">
                <input
                  className="form-control"
                  type="text"
                  name="address practiceArea expertise"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search"
                />

                <button className="search-btn" type="submit">
                  <i className="la la-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
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
                        Dashboard
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

          <div className="dashboard-main-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-box">
                    <div className="form-title-wrap">
                      <div>
                        <h3 className="title">Lawyer List</h3>
                        <p className="font-size-14">
                          Showing 1 to 10 of 20 entries
                        </p>
                      </div>
                    </div>
                    <div className="table-form table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Cell</th>
                            <th scope="col">Education</th>
                            <th scope="col">Practise Area</th>
                            <th scope="col">Expertise</th>
                            <th scope="col">PAY</th>
                            <th scope="col">Hire Now</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(filteredData.length > 0 ? filteredData : data).map(
                            (item) => (
                              <tr key={item._id}>
                                <td>
                                  <div className="table-content">
                                    <h3 className="title">{item.firstName}</h3>
                                  </div>
                                </td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.cell}</td>
                                <td>{item.education}</td>
                                <td>{item.practiceArea}</td>
                                <td>{item.expertise}</td>
                                <td>50</td>
                                <td>
                                  <StripeCheckout
                                    stripeKey="pk_test_51NGxZtJqBgewUbeBi5Kbi9ba2INMfEqsDWR0uXfWE71XeUaazaNlOypIHHbiDfqEPH45vIfJ6sthQW5uMfxKSFvQ009OIQIfzL"
                                    token={(token) =>
                                      handletoken(token, item.address)
                                    }
                                    amount={50 * 100}
                                    name={item.firstName}
                                    billingAddress
                                  />
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className="page-link page-link-nav"
                          href="/"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <i className="la la-angle-left" />
                          </span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link page-link-nav" href="/">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link page-link-nav" href="/">
                          2 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link page-link-nav" href="/">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link page-link-nav"
                          href="/"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">
                            <i className="la la-angle-right" />
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="border-top mt-5" />
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="copy-right padding-top-30px">
                    <p className="copy__desc">
                       The Grand Rankify {" "}
                      <span className="la la-heart" /> 
                    </p>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="copy-right-content text-right padding-top-30px">
                    <ul className="social-profile">
                      <li>
                        <a href="/">
                          <i className="lab la-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="lab la-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="lab la-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="lab la-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    
  
  );
}

export default MainDashboard;
