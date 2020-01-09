import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Head from '../components/head'



const page404 = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Oops! are you lost?</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default page404