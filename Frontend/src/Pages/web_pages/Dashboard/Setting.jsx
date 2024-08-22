import React, { useContext, useEffect, useState } from "react";
import api from '../../../Services/Axios'
import Store from "../../../Services/Store";
import { toast } from "react-toastify";


function Setting() {

  
const { state, dispatch } = useContext(Store);
const { UserInfo } = state;

const [firstName, setFirstName] = useState(UserInfo.firstName);
const [lastName, setLastName] = useState(UserInfo.lastName);
const [email, setEmail] = useState(UserInfo.email);
const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const [cell, setCell] = useState(UserInfo.cell);
const [address, setAddress] = useState(UserInfo.address);

const [education, setEducation] = useState(UserInfo.education);
const [practiceArea, setPracticeArea] = useState(UserInfo.practiceArea);

 



  //update info ====================================================================
  const handleUpdateUserInfo = async () => {
    try {
      const response = await api.patch(`/user/update/${UserInfo._id}`, {
        firstName,
        lastName,
        email,
        password,
        cell,
        address,
        education,
        practiceArea
      });

      dispatch({
        type: "AdminLogin",
        payload: response.data,
      });
      localStorage.setItem("UserInfo", JSON.stringify(response.data.data));
      toast.success("User information updated successfully");
    } catch (error) {
      console.error("Error updating user information:", error);
      alert("Error updating information. Please try again.");
    }
  };

    //change password =============================================
    const handleChangePassword = async () => {
      try {
        const response = await api.patch(
          `/user/change-password/${UserInfo._id}`,
          { password, newPassword, confirmPassword }
        );
        dispatch({
          type: "AdminLogin",
          payload: response.data,
        });
        localStorage.setItem("UserInfo", JSON.stringify(response.data.data));
        toast.success(response.data.message);
      } catch (error) {
        console.error("Error changing password:", error);
        alert("Error changing password. Please try again later.");
      }
    };


    //image handeling==============================================
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(UserInfo.image);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("image", selectedFile);
    
    try {
      console.log("hit 1")
      const response = await api.patch(
        `/user/upload/image/${UserInfo.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({
        type: "AdminLogin",
        payload: response.data,
      });
      localStorage.setItem("UserInfo", JSON.stringify(response.data.data));
      toast.success(response.data.message);
      setSelectedFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };




  return (
    <div>
      <div className="col-lg-6">
        <div className="form-box">
          <div className="dashboard-bread dashboard--bread">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Settings
                      </h2>
                    </div>
                  </div>
                  {/* end breadcrumb-content */}
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="/" className="text-white">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="Dashboard" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-white">
                          Setting
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end breadcrumb-list */}
                </div>
                {/* end col-lg-6 */}
              </div>
              {/* end row */}
            </div>
          </div>

          <div className="form-title-wrap">
            <h3 className="title">Personal Information</h3>
          </div>
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-4">
              <div className="user-pro-img">
                <img src="../images/team/team-3.jpg" alt="user-image" />
              </div>
              <div className="upload-btn-box">
                <p className="pb-2 font-size-15 line-height-24">
                  Max file size is 5MB, Minimum dimension: 150x150 And Suitable
                  files are .jpg &amp; .png
                </p>
                <div className="file-upload-wrap file-upload-wrap-2">
                  <div className="MultiFile-wrap" id="MultiFile1">
                    <input
                      type="file"
                      name="files[]"
                      className="multi file-upload-input with-preview MultiFile-applied"
                      maxLength={1}
                      id="MultiFile1"
                      defaultValue=""
                    />
                    <div className="MultiFile-list" id="MultiFile1_list" />
                  </div>
                  <span className="file-upload-text">
                    <i className="la la-upload mr-2" />
                    Upload Image
                  </span>
                  <a href="#" className="theme-btn theme-btn-small">
                    Remove Image
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">First Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Last Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Phone number</label>
                      <div className="form-group">
                        <span className="la la-phone form-icon" />
                        <input
                          className="form-control"
                          type="number"
                          value={cell}
                          onChange={(e) => setCell(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}

                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Address</label>
                      <div className="form-group">
                        <span className="la la-map form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Qualification</label>
                      <div className="form-group">
                        <span className="la la-map form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={education}
                          onChange={(e) => setEducation(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Prectice Area</label>
                      <div className="form-group">
                        <span className="la la-map form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={practiceArea}
                          onChange={(e) => setPracticeArea(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button
                        className="theme-btn"
                        type="button"
                        onClick={handleUpdateUserInfo}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                  {/* end col-lg-12 */}
                </div>
                {/* end row */}
              </form>
            </div>
          </div>
        </div>
        {/* end form-box */}
      </div>
      <div className="col-lg-6">
        <div className="form-box">
          <div className="form-title-wrap">
            <h3 className="title">Change Password</h3>
          </div>
          <div className="form-content">
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Current Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Current password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">New Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="password"
                          placeholder="New password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Confirm Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="password"
                          placeholder="New password again"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button
                        className="theme-btn"
                        type="button"
                        onClick={handleChangePassword}
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                  {/* end col-lg-12 */}
                </div>
                {/* end row */}
              </form>
            </div>
          </div>
        </div>
        {/* end form-box */}
      </div>
    </div>
  );
}

export default Setting;
