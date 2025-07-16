import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../Utils/Axios";
import Footer from "./include/Footer";
import { Store } from "../../Utils/Store";
import PageTitle from "./include/PageTitle";

function Login({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islawyer] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get role from query param
  const params = new URLSearchParams(location.search);
  const role = params.get("role");

  const { state, dispatch } = useContext(Store);
  const { UserInfo } = state;

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (UserInfo) {
      if (UserInfo.isAdmin) {
        navigate("/admin/dashboard");
      } else if (UserInfo.isLawyer) {
        navigate("/user/dashboard");
      } else {
        navigate("/attorneys");
      }
    }
  }, [UserInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, password };
      const response = await api.post("/auth/login", userData);
      
      if (response.data.success) {
        const userType = response.data.userType;
        const userDocument = response.data.userDocument._doc;

        dispatch({
          type: "UserLoggedIn",
          payload: userDocument,
        });

        localStorage.setItem("UserInfo", JSON.stringify(userDocument));

        if (response.data.userDocument._doc.isAdmin) {
          toast.success("Login Successful as an Admin");
          navigate("/admin/dashboard");
        } else if (userType === "lawyer") {
          toast.success("Login Successful as a Lawyer");
          navigate("/user/dashboard");
        } else if (userType === "user") {
          toast.success("Login Successful as an User");
          navigate("/attorneys");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Helmet><title>{title}</title></Helmet>
      <PageTitle title={title} />
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6fa' }}>
        <div className="container" style={{ maxWidth: 420, width: '100%' }}>
          <div className="row justify-content-center">
            <div className="col-12">
              <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 0 32px rgba(0,0,0,0.10)', padding: '2.5rem 2rem', margin: '0 auto' }}>
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 6 }}>
                    {role === 'lawyer' ? 'Lawyer Login' : 'User Login'}
                  </h2>
                  <div style={{ color: '#888', fontSize: '1.08rem' }}>
                    Please enter your credentials to sign in.
                  </div>
                </div>
                <form className="login" id="login_form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
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
                  <button className="btn btn-success btn-block waves-effect waves-light" type="submit" style={{ width: '100%', padding: '0.95rem', fontWeight: 700, fontSize: '1.13rem', borderRadius: '0.5rem', marginTop: 6, letterSpacing: 0.5 }}>
                    Sign In
                  </button>
                  <div className="mt-3 text-center">
                    <span style={{ fontWeight: 500 }}>Don't have an Account? </span>
                    <Link to="/choose-role" style={{ fontWeight: 500, color: '#2d7aee' }}>
                      Register!
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

export default Login;
