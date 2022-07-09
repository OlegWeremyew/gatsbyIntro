import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.textCenter}>
        <div  className="posts">
          {nodes.map(post => {
            const { title, category, url, image } = post.frontmatter
            const img = getImage(image)
            return (
              <div key={post.id} className="post">
                <GatsbyImage alt={title} image={img} />
                <Link to={`/${category}/${url}`}>
                  {title}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
 {
  allMarkdownRemark {
    nodes {
      frontmatter {
        category
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 70, formats: [AUTO, AVIF], width: 200)
          }
        }
      }
      id
    }
  }
}`