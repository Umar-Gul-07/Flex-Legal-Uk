import React, { useContext, useState } from 'react';
import { Store } from '../../Utils/Store';
import api from '../../Utils/Axios';
import { toast } from 'react-toastify';

function Setting() {
    const { state,dispatch } = useContext(Store);
    const { UserInfo } = state;

    // Initialize state for each attribute
    const [firstName, setFirstName] = useState(UserInfo?.firstName || '');
    const [lastName, setLastName] = useState(UserInfo?.lastName || '');
    const [email, setEmail] = useState(UserInfo?.email || '');
    const [address, setAddress] = useState(UserInfo?.address || '');
    const [cell, setCell] = useState(UserInfo?.cell || '');
    const [education, setEducation] = useState(UserInfo?.education || '');
    const [expertise, setExpertise] = useState(UserInfo?.expertise || '');
    const [practiceArea, setPracticeArea] = useState(UserInfo?.practiceArea || '');

    // Handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Call the API to update user data
        const data = {
            firstName,
            lastName,
            email,
            address,
            cell,
            education,
            expertise,
            practiceArea,
        }
        try {
            const response = await api.patch('',data)
            localStorage.removeItem('UserInfo');
            dispatch({ type: 'ClearUserInfo', payload: null })

            dispatch({
                type: "UserLoggedIn",
                payload: response.data, // Store only the necessary data
            });
            // Storing the extracted user data in local storage
            localStorage.setItem("UserInfo", JSON.stringify(response.data));
            toast.success("Data Updated SuccessFully")

        } catch (error) {
            
            toast.error(error.message)
        }

    };

    return (
        <>
            <div className="page-content">
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Settings</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Update Your Information</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-firstName">First Name</label>
                                                        <input
                                                            id="input-firstName"
                                                            className="form-control"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-lastName">Last Name</label>
                                                        <input
                                                            id="input-lastName"
                                                            className="form-control"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-email">Email</label>
                                                        <input
                                                            id="input-email"
                                                            className="form-control"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-address">Address</label>
                                                        <input
                                                            id="input-address"
                                                            className="form-control"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-cell">Cell</label>
                                                        <input
                                                            id="input-cell"
                                                            className="form-control"
                                                            value={cell}
                                                            onChange={(e) => setCell(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mt-4 mt-lg-0">
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-education">Education</label>
                                                        <input
                                                            id="input-education"
                                                            className="form-control"
                                                            value={education}
                                                            onChange={(e) => setEducation(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-expertise">Expertise</label>
                                                        <input
                                                            id="input-expertise"
                                                            className="form-control"
                                                            value={expertise}
                                                            onChange={(e) => setExpertise(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="input-practiceArea">Practice Area</label>
                                                        <input
                                                            id="input-practiceArea"
                                                            className="form-control"
                                                            value={practiceArea}
                                                            onChange={(e) => setPracticeArea(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <button type="submit" className="btn btn-primary">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </div>
            </div>
        </>
    );
}

export default Setting;
