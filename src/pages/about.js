import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => (
    <>
        <Layout >
            <Head title="About" />
            <h1> This is some shit about me </h1>
            <h3>
                <Link to="/contact">
                    Anyways contact me nairamarley@yahoo.com
            </Link>
            </h3>
        </Layout>
    </>
)

export default AboutPage