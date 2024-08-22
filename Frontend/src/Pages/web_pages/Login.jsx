import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import api from "../../Services/Axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Store from "../../Services/Store";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islawyer, ] = useState(false);  
  const navigate = useNavigate();

  const {state,dispatch}=useContext(Store)
  const {UserInfo}=state

  const handleSubmit = async (e) => {
    e.preventDefault();

     

    try {
      const userData = { email, password };
      const response = await api.post("/auth/login", userData);
    
      if (response.data.success) {
        const userType = response.data.userType;
        const userDocument = response.data.userDocument._doc; // Access the actual data under _doc
    
        // Dispatching the extracted user data
        dispatch({
          type: "LawyerLogin",
          payload: userDocument, // Store only the necessary data
        });
    
        // Storing the extracted user data in local storage
        localStorage.setItem("UserInfo", JSON.stringify(userDocument));
    
        if (userType === "user") {
          toast.success("Login Successful as a User");
          navigate("/Dashboard");
        } else if (userType === "lawyer") {
          toast.success("Login Successful as a Lawyer");
          navigate("/LawyerDash");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
    
        validationErrors.forEach((error) => {
          toast.error(error.msg);
        });
      } else if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during login.");
      }
    }
    
    
  };

  return (
    <>
    <Navbar/>
      <Helmet>
        <title> Login</title>
      </Helmet>

      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-soft-primary">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>
                          Sign in to <b>Continue</b>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div>
                    <a href>
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light"></span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2">
                    <p>
                      If you have not created an account yet, then please first.
                    </p>
                    <form
                      className="login"
                      id="login_form"
                      onSubmit={handleSubmit}
                    >
                      <div id="div_id_password" className="mb-3">
                        <label
                          htmlFor="id_password"
                          className="form-label requiredField"
                        >
                          Email<span className="asteriskField">*</span>
                        </label>
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="email"
                          name="login"
                          placeholder="Email address"
                          autoComplete="email"
                          maxLength={320}
                          className="textinput form-control"
                          required
                          id="id_login"
                        />
                      </div>
                      <div id="div_id_password" className="mb-3">
                        <label
                          htmlFor="id_password"
                          className="form-label requiredField"
                        >
                          Password<span className="asteriskField">*</span>
                        </label>
                        <input
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          className="passwordinput form-control"
                          required
                          id="id_password"
                        />
                      </div>
                      <div className="mb-3">
                        <div id="div_id_remember" className="mb-3 form-check">
                          <input
                            type="checkbox"
                            name="remember"
                            className="checkboxinput form-check-input"
                            id="id_remember"
                          />
                          <label
                            htmlFor="id_remember"
                            className="form-check-label"
                          >
                            Remember Me
                          </label>
                        </div>{" "}
                      </div>
                      <div className="mt-3">
                        <button
                          className="btn btn-success btn-block waves-effect waves-dark"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                    <div className="mt-4 text-center">
                      <p style={{ display: "inline-block" }}>No Account? </p>
                      <a
                        href="/Registration"
                        style={{ display: "inline-block" }}
                      >
                        Create one!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;