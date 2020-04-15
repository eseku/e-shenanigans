import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import Head from '../components/head'
import { code, date, link } from '../styles/blog.module.scss'


export const query = graphql`
    query ($slug: String) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            publishedDate (formatString : "MMMM Do, YYYY")
            postBody {
                json
            }
        }
    }
`


const Blog = (props) => {

    const options = {
        renderMark: {
            [MARKS.CODE]: (text) => {
                return<code className={code} >{text}</code>
            },
        },
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields && node.data.target.fields.title["en-US"]
                const url = node.data.target.fields && node.data.target.fields.file["en-US"].url

                return <img alt={alt} src={url} />
            },
            [INLINES.HYPERLINK]: (node) => {
                const text = node.content && node.content[0].value.toString()
                return <a className={link} href={node.data.uri}>{text}</a>
            }
            // ,
            // [BLOCKS.QUOTE]: (node, children) => {
            //     console.log(node.content)
            //     return <blockquote>{...children}</blockquote>
            // }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p className={date}>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.postBody.json, options)}
            <Link className={link} to="/blog">Back To Blog</Link>
        </Layout>
    )
}


export default Blog