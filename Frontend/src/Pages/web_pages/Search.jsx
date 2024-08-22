import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Services/Axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainDashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showAllLawyers, setShowAllLawyers] = useState(false);

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
    setShowAllLawyers(false); // Set to false to show only filtered data
  };

  const handleShowAllLawyers = () => {
    // Toggle the value of showAllLawyers
    setShowAllLawyers((prevShowAllLawyers) => !prevShowAllLawyers);

    // Clear filtered data
    setFilteredData([]);
  };

  return (
    <div>
      <Navbar />
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#555", color: "#fff" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form
              className="form-inline ml-auto"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  name="address practiceArea expertise"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">
                    <i className="la la-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Lawyer List</h3>
                <button
                  className="btn btn-secondary mb-3"
                  onClick={handleShowAllLawyers}
                >
                  Show All Lawyers
                </button>
                <div className="table-responsive">
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
                        <td scope="col"> Hire Now </td>
                      </tr>
                    </thead>
                    <tbody>
                      {(showAllLawyers ? data : filteredData).map((item) => (
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
                            <Link to="/login">
                              <button className="btn btn-primary">Hire</button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainDashboard;
