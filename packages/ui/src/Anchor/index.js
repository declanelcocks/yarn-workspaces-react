import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Anchor = styled.a`
  text-decoration: none;
  color: ${ifProp({ palette: 'grayscale' }, palette(0), palette(3))};
  transition: all 0.1s ease;

  &:hover,
  &:focus {
    color: ${palette(0)};
    cursor: pointer;
  }
`

Anchor.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  href: PropTypes.string,
}

Anchor.defaultProps = {
  palette: 'primary',
}

export default Anchor
