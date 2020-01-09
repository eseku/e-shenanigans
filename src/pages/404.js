import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



const page404 = () => {
    return (
        <Layout>
            <h1>Oops! are you lost?</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default page404