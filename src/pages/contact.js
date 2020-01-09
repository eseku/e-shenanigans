import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => (
    <Layout>
        <Head title="Contact" />
        <h1>This is my contact page </h1>
        <p>Email me at joojoquartey11@gmail.com</p>
        <p>You can reach me on
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