import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../Utils/Axios";
import { Helmet } from 'react-helmet'
import PageTitle from './include/PageTitle'
import Footer from "./include/Footer";

// Component for user registration
function Registration({title}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [practiceArea, setPracticeArea] = useState("");
  const [education, setEducation] = useState("");
  const [expertise, setExpertise] = useState("");
  const [registerAsLawyer, setRegisterAsLawyer] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get role from query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get("role");
    if (role === "lawyer") {
      setRegisterAsLawyer(true);
    } else {
      setRegisterAsLawyer(false);
    }
  }, [location.search]);

  const params = new URLSearchParams(location.search);
  const role = params.get("role");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const actualData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        cell,
        address,
        education,
        practiceArea,
        expertise,
        isLawyer: registerAsLawyer,
      };

      const endpoint = registerAsLawyer ? "/lawyer/register" : "/user/register";

      const response = await api.post(endpoint, actualData);

      if(response.data.success){
        toast.success(response.data.message);

         if (registerAsLawyer){
           toast.info("Your lawyer account has been created successfully! Please wait for admin verification before you can log in.");
           navigate("/Login?role=lawyer");
        } else{
           navigate("/login?role=user");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch(error){
      console.error("An error occurred during registration:", error);

      if (error.response && error.response.status === 400) {
         toast.error(error.response.data.message);
      } else if(error.response && error.response.status === 422){
         const responseData = error.response.data;
        if (responseData.errors){
          responseData.errors.forEach((validationError) => {
            toast.error(validationError.msg);
          });
        } else{
          toast.error("Bad request");
        }
      } else {
         toast.error("An error occurred during registration.");
      }
    }
  };

  return(
    <>
    <Helmet><title>{title}</title></Helmet>
    <PageTitle title={title} />
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6fa' }}>
      <div className="container" style={{ maxWidth: role === 'lawyer' ? 700 : 420, width: '100%' }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 0 32px rgba(0,0,0,0.10)', padding: '2.5rem 2rem', margin: '0 auto' }}>
              <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 6 }}>
                  {role === 'lawyer' ? 'Lawyer Registration' : 'User Registration'}
                </h2>
                <div style={{ color: '#888', fontSize: '1.08rem' }}>
                  Please fill in the details below to create your account.
                </div>
              </div>
              <form
                className="login"
                id="registration_form"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
              >
                {role === 'lawyer' ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.1rem' }}>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_first_name" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        First Name<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_first_name"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_last_name" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Last Name<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_last_name"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_email" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Email<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="Email address"
                        autoComplete="email"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_email"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_cell" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Cell<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setCell(e.target.value)}
                        type="text"
                        name="cell"
                        placeholder="Cell"
                        autoComplete="number"
                        maxLength={320}
                        className="numberinput form-control"
                        required
                        id="id_cell"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_address" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Address<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address"
                        placeholder="Address"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_address"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_education" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Education<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setEducation(e.target.value)}
                        type="text"
                        name="education"
                        placeholder="Education"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_education"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_practice_area" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Practice Area<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setPracticeArea(e.target.value)}
                        type="text"
                        name="practice_area"
                        placeholder="Practice Area"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_practice_area"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_expertise" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Expertise<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setExpertise(e.target.value)}
                        type="text"
                        name="expertise"
                        placeholder="Expertise"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_expertise"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_password" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Password<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="passwordinput form-control"
                        required
                        id="id_password"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 45%' }}>
                      <label htmlFor="id_confirm_password" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Confirm Password<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        className="passwordinput form-control"
                        required
                        id="id_confirm_password"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="id_first_name" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        First Name<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_first_name"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="id_last_name" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Last Name<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        autoComplete="text"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_last_name"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="id_email" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Email<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="Email address"
                        autoComplete="email"
                        maxLength={320}
                        className="textinput form-control"
                        required
                        id="id_email"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="id_password" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Password<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="passwordinput form-control"
                        required
                        id="id_password"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="id_confirm_password" className="form-label requiredField" style={{ fontWeight: 500, marginBottom: 4 }}>
                        Confirm Password<span className="asteriskField">*</span>
                      </label>
                      <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        className="passwordinput form-control"
                        required
                        id="id_confirm_password"
                        style={{ borderRadius: '0.5rem', padding: '0.85rem', width: '100%', fontSize: '1.08rem', border: '1.5px solid #e0e7ef' }}
                      />
                    </div>
                  </>
                )}
                <div className="mb-2">
                  <input
                    type="checkbox"
                    name="registerAsLawyer"
                    className="checkboxinput form-check-input"
                    id="id_register_as_lawyer"
                    checked={registerAsLawyer}
                    onChange={() => setRegisterAsLawyer(!registerAsLawyer)}
                    disabled={role === 'lawyer' || role === 'user'}
                    style={{ marginRight: 8 }}
                  />
                  <label htmlFor="id_register_as_lawyer" className="form-check-label" style={{ fontWeight: 500, userSelect: 'none' }}>
                    Register as a Lawyer
                  </label>
                </div>
                <button
                  className="btn btn-success btn-block waves-effect waves-light"
                  type="submit"
                  style={{ width: '100%', padding: '0.95rem', fontWeight: 700, fontSize: '1.13rem', borderRadius: '0.5rem', marginTop: 6, letterSpacing: 0.5 }}
                >
                  Sign Up
                </button>
                <div className="mt-3 text-center">
                  <span style={{ fontWeight: 500 }}>Already have an Account? </span>
                  <Link to={`/login?role=${role || 'user'}`} style={{ fontWeight: 500, color: '#2d7aee' }}>
                    Sign in!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Registration;
