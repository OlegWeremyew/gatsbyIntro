const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
  {
  allMarkdownRemark {
    nodes {
      frontmatter {
        url
        category
      }
    }
  }
  }
  `)
  console.log(`data >>`, data)
  console.log('fgdfgfghfghfg')
  data.allMarkdownRemark.nodes.forEach(node => {
    const {url, category} = node.frontmatter
    actions.createPage({
      path: `/${category}/${url}`,
      component: path.resolve('./src/templates/single-post.js'),
      context: {url}
    })
  })
}
