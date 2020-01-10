import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import IndexStyles from '../styles/index.module.scss'


const indexPage = () => (
    <>
        <Layout>
            <Head title="Home" />
            <h1
                className={IndexStyles.hello}
            >
                Hello.
            </h1>

            <p
                className={IndexStyles.paragraph}
            >
                I am Joojo, a passionate and learning
                <span
                    className={IndexStyles.bold}
                >
                    software engineer.
                </span>

                <br />
                This is my

                <Link
                    to="/blog"
                    className={IndexStyles.link}
                >
                    blog.
                </Link>
            </p>

            <p
                className={IndexStyles.paragraph}
            >

            </p>
        </Layout>
    </>
)

export default indexPage