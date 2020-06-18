import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  & p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  & a {
    font-size: 24px;
  }

  & a:not(:last-child) {
    margin-right: 0.5rem;
  }

  & svg {
    transition: filter 0.3s ease;
    fill: ${props => props.theme.colors.main1};
  }

  & svg:hover,
  svg:focus {
    filter: brightness(50%);
  }
`
