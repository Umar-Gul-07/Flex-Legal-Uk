import React from 'react'
import { Link } from 'react-router-dom'

function PageTitle({title}) {
    return (
        <>
            <div className="pageTitle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <h1 className="page-heading">{title}</h1>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="breadCrumb">
                                <Link to="/">Home</Link> / <span>{title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle