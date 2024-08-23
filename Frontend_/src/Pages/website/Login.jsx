import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from './include/PageTitle'

function Login({title}) {
    return (
        <>
            <Helmet><title>{title}</title></Helmet>



            <PageTitle title={title} />
        </>
    )
}

export default Login