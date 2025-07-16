import { useContext, useEffect, useState } from "react";
import { Store } from "../../Utils/Store";
import api from "../../Utils/Axios";

const Main = () => {
  const [information, setInformation] = useState([]);

  const get_all_information = async () => {
    try {
      const { data } = await api.get(`/user/get_all_information`);
      setInformation(data);
      console.log(data);
    } catch (error) {
      // toast.error(error.message || "Failed to fetch attorneys");
    }
  };
  const { state } = useContext(Store);
  const { UserInfo } = state;

  useEffect(() => {
    get_all_information();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src="/assets/admin/images/users/avatar-1.jpg"
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <p className="mb-2">
                          Welcome to <b>{UserInfo.firstName}</b> Dashboard
                        </p>
                        <h4>{UserInfo.email}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                        <i className="bx bx-copy-alt" />
                      </span>
                    </div>
                    <h5 className="font-size-14 mb-0">Total Transactions</h5>
                  </div>
                  <div className="text-muted mt-4">
                    <h4>
                      {information.transactions &&
                      Array.isArray(information.transactions)
                        ? information.transactions.length
                        : 0}
                      <i className="mdi mdi-inbox ms-1 text-success" />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                        <i className="bx bx-copy-alt" />
                      </span>
                    </div>
                    <h5 className="font-size-14 mb-0">Total Users</h5>
                  </div>
                  <div className="text-muted mt-4">
                    <h4>
                      {information.users && Array.isArray(information.users)
                        ? information.users.length
                        : 0}
                      <i className="mdi mdi-inbox ms-1 text-success" />
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                        <i className="bx bx-copy-alt" />
                      </span>
                    </div>
                    <h5 className="font-size-14 mb-0">Total Attorneys</h5>
                  </div>
                  <div className="text-muted mt-4">
                    <h4>
                      {information.attorneys &&
                      Array.isArray(information.attorneys)
                        ? information.attorneys.length
                        : 0}
                      <i className="mdi mdi-inbox ms-1 text-success" />
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18">
                        <i className="bx bx-time" />
                      </span>
                    </div>
                    <h5 className="font-size-14 mb-0">Pending Verifications</h5>
                  </div>
                  <div className="text-muted mt-4">
                    <h4>
                      {information.pendingLawyers &&
                      Array.isArray(information.pendingLawyers)
                        ? information.pendingLawyers.length
                        : 0}
                      <i className="mdi mdi-clock ms-1 text-warning" />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
    </>
  );
};

export default Main;
