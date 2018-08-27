import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Block = styled.div`
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
  color: ${palette({ grayscale: 0 }, 3)};
  ${ifProp(
    'inline',
    css`
      display: inline-flex;
    `,
  )};
`

Block.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Block.defaultProps = {
  palette: 'grayscale',
}

export default Block
