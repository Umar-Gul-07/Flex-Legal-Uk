import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Utils/Axios";

function PendingLawyers() {
  const [pendingLawyers, setPendingLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPendingLawyers = async () => {
    try {
      const { data } = await api.get(`/lawyer/pending`);

      if (data.success && Array.isArray(data.lawyers)) {
        setPendingLawyers(data.lawyers);
      } else {
        toast.error("Unexpected response format");
      }
    } catch (error) {
      toast.error(error.message || "Failed to fetch pending lawyers");
    } finally {
      setLoading(false);
    }
  };

  const approveLawyer = async (lawyerId) => {
    try {
      await api.patch(`/lawyer/approve/${lawyerId}`);
      setPendingLawyers((prevLawyers) =>
        prevLawyers.filter((lawyer) => lawyer._id !== lawyerId)
      );
      toast.success("Lawyer approved successfully");
    } catch (error) {
      toast.error(error.message || "Failed to approve lawyer");
    }
  };

  const rejectLawyer = async (lawyerId) => {
    const reason = prompt("Please provide a reason for rejection (optional):");
    try {
      await api.patch(`/lawyer/reject/${lawyerId}`, { reason });
      setPendingLawyers((prevLawyers) =>
        prevLawyers.filter((lawyer) => lawyer._id !== lawyerId)
      );
      toast.success("Lawyer rejected successfully");
    } catch (error) {
      toast.error(error.message || "Failed to reject lawyer");
    }
  };

  useEffect(() => {
    getPendingLawyers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Pending Lawyer Verifications</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Lawyers Awaiting Approval</h4>
                <div className="table-responsive">
                  <table className="table table-editable table-nowrap align-middle table-edits">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cell</th>
                        <th>Address</th>
                        <th>Education</th>
                        <th>Practice Area</th>
                        <th>Expertise</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingLawyers.length > 0 ? (
                        pendingLawyers.map((lawyer) => (
                          <tr key={lawyer._id} style={{ cursor: "pointer" }}>
                            <td style={{ width: 80 }}>{lawyer._id}</td>
                            <td>
                              {lawyer.firstName} {lawyer.lastName}
                            </td>
                            <td>{lawyer.email}</td>
                            <td>{lawyer.cell}</td>
                            <td>{lawyer.address}</td>
                            <td>{lawyer.education}</td>
                            <td>{lawyer.practiceArea}</td>
                            <td>{lawyer.expertise}</td>
                            <td style={{ width: 150 }}>
                              <button
                                onClick={() => approveLawyer(lawyer._id)}
                                className="btn btn-outline-success btn-sm me-2"
                                title="Approve"
                              >
                                <i className="fas fa-check" />
                              </button>
                              <button
                                onClick={() => rejectLawyer(lawyer._id)}
                                className="btn btn-outline-danger btn-sm"
                                title="Reject"
                              >
                                <i className="fas fa-times" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="9">
                            <p className="text-success text-center">
                              No pending lawyer verifications
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingLawyers; 