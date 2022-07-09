import * as React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const SinglePost = ({data}) => {

  const {html} = data.markdownRemark;
  const {title, image} = data.markdownRemark.frontmatter
  const img = getImage(image)

  return (
    <Layout>
      <Seo title="{title}" />
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage alt={title} image={img} />
        </div>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </Layout>
  )
}

export default SinglePost


export const query = graphql`
query Post($url: String) {
  markdownRemark(html: {}, frontmatter: {url: {eq: $url}}) {
  html
    frontmatter {
      category
      title
      url
      image {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  }
}
`