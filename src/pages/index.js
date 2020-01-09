import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const indexPage = () => (
    <>
        <Layout>
            <Head title="Home" />
            <h1>Hello.</h1>
            <h2>I'm Joojo, a full stack developer living in Accra, Ghana</h2>
            <p>
                Why all this? I'm a builder. That's what i do. Essentially bringing life to things.
                This is probably why i love software technology as at its core is putting pieces together to
                engineer full working robust systems
            </p>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    </>
)

export default indexPage