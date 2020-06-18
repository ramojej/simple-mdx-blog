import React from "react"
import { ContainerWrapper } from "../elements/ContainerElements"
import { Nav } from "../components/Nav"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
    </ContainerWrapper>
  )
}
