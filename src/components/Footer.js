import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </FooterSocialIcons>
        <p>&copy; 2020. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
