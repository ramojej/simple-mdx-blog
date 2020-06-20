import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const Seo = ({ description, title, image, author, url, keywords }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(detailsQuery)
  //console.log(siteMetadata)
  const metaDescription = description || siteMetadata.description
  const metaTitle = title || siteMetadata.title
  const metaAuthor = author || siteMetadata.author
  const metaUrl = url || siteMetadata.url
  const metaKeywords = keywords || [
    "gatsby blog",
    "gatsby MDX blog",
    "Jejomar simple blog",
  ]
  const metaImage = image || siteMetadata.image

  return (
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  )
}

export const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
