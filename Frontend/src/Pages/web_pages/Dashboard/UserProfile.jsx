import React, { useState, useEffect, useContext } from "react";
 import Sidebar from "./Sidebar";
 import Store from '../../../Services/Store'
 

function UserProfile() {

  const { state } = useContext(Store);
  const { UserInfo } = state;
  // const [isEditMode, setIsEditMode] = useState(false);
  // const [userData, setUserData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  // const handleEditClick = () => {
  //   setIsEditMode(true);
  // };

  // const handleSaveChanges = async () => {
  //   try {
  //     // Make a request to save the changes to the backend (replace with your actual API endpoint)
  //     await api.put("/user/profile", userData);
  //     setIsEditMode(false);
  //   } catch (error) {
  //     console.error("Error saving changes:", error);
  //     // Handle error as needed
  //   }
  // };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await api.get("/lawyer");
  //       const user = response.data;

  //       setUserData({
  //         firstName: user.firstName || "",
  //         lastName: user.lastName || "",
  //         email: user.email || "",
  //         password: user.password,  
  //       });
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       // Handle error as needed
  //     }
  //   };

  //   // Fetch user data when the component mounts
  //   fetchUserData();
  // }, []);

  return (
    <div className="col-lg-5 mx-auto text-center">
      <Sidebar></Sidebar>

      <div className="breadcrumb-content">
        <div className="section-heading">
          <h2 className="sec__title font-size-30 text-white">Settings</h2>
        </div>
      </div>

      <div className="form-box">
        {/* ... Other HTML code ... */}

        <div className="form-title-wrap">
          <h1 className="title"> Profile</h1>
        </div>

        <div className="form-content">
          {/* ... Other HTML code ... */}
          <div className="contact-form-action">
             
              <div>
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">First Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={UserInfo.firstName}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Last Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={UserInfo.lastName}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="email"
                          value={UserInfo.email}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="password"
                          value={UserInfo.password}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Cell Number</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="number"
                          value={UserInfo.cell}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={UserInfo.address}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Qualification</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={UserInfo.education}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Experties</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={UserInfo.experties}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Practice Area</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={UserInfo.practiceArea}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="email"
                          value={UserInfo.email}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button
                    
                        className="theme-btn"
                        type="button"
                       >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
