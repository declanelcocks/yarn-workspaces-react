import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import NavLink from 'react-router-dom/NavLink'

const styles = css`
  text-decoration: none;
  color: ${ifProp({ palette: 'grayscale' }, palette(0), palette(3))};
  transition: all 0.1s ease;

  &:hover,
  &:focus {
    color: ${palette(0)};
  }
`

const StyledNavLink = styled(({ theme, reverse, palette, ...props }) => (
  <NavLink {...props} />
))`
  ${styles};
`

const Anchor = styled.a`
  ${styles};
`

const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledNavLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'primary',
}

export default Link
