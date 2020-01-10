import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => (
    <Layout>
        <Head title="Contact" />
        <h1 style={{ color: `grey` }}>Contact </h1>
        <p>
            <a href="mailto: joojoquartey11@gmail.com">Send Me An Email</a>
        </p>
        <p>or you can reach me on
            <a
                href="https://twitter.com/esekuu"
                target="_blank"
                rel="noopener noreferrer"
            >
                {" twitter"}
            </a>
        </p>
    </Layout>
)

export default ContactPage