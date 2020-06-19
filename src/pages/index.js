import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 19, 1990"
          title="Wheelie on the boy"
          excerpt="lorem bus"
          slug="/asdf"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
