import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from './include/PageTitle'

function Login({ title }) {
    return (
        <>
            <Helmet><title>{title}</title></Helmet>



            <PageTitle title={title} />


            <div className="container">
                <div className="row mt-5 mb-5" style={{justifyContent:"center"}}>
                    <div className="col-lg-8  justify-content-center col-md-10 col-sm-12" >
                        <div className="card shadow-sm p-4 mx-auto">
                            <h3 className="card-title text-center mb-4">Sign In</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                    </small>
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group form-check mt-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Remember me
                                    </label>
                                </div>
                                <div style={{marginBottom:"30px"}}>
                                <button type="submit" className="btn btn-primary w-100 mt-4">
                                    Submit
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Login