import { graphql, useStaticQuery } from 'gatsby'

const articlesQuery = graphql`{
    resources: allBlogYaml {
        edges {
            node {
                date
                title
                url
            }
        }
    }
}`

export const useBlog = () => {
    const { resources } = useStaticQuery(articlesQuery)
    return resources.edges.map(({ node }) => node)
}