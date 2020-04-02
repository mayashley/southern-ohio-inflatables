const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      combos: allContentfulCombos {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.combos.edges.forEach(({ node }) => {
    createPage({
      path: `BounceCombo/${node.slug}`,
      component: path.resolve("./src/templates/CombosTemplate.js"),
      context: {
        slug: node.slug,
      }
    })
  })
}

