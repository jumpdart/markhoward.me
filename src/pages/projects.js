import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  const {allProjectsJson} = useStaticQuery(
    graphql`
      query names{
        allProjectsJson {
          edges {
            node {
              name,
              description
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="projects" />
      <h1>projects</h1>
      <ul>
        {allProjectsJson.edges.map((edge,i) => {
          return <li key={i}>{`${edge.node.name} - ${edge.node.description}`}</li>
        })}
      </ul>
    </Layout>
  );
}

export default Projects
