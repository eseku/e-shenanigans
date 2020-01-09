import React from 'react'
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby'


const Head = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)

    return (
        <Helmet title={data.site.siteMetadata.title} />
    )
}


export default Head