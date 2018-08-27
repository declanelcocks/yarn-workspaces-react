import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : palette(disabled ? 5 : 3)

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? palette(disabled ? 5 : 3) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) =>
  !disabled && !transparent && palette(2)
const hoverForegroundColor = ({ disabled, transparent }) =>
  !disabled && transparent && palette(2)

const styles = css`
  display: block;
  font-size: 1rem;
  line-height: ${ifProp('small', '1rem', '1.5rem')};
  border: 0.0625rem solid
    ${ifProp('transparent', 'currentcolor', 'transparent')};
  padding: ${ifProp(
      'small',
      'calc(0.25rem - 0.0625rem)',
      'calc(0.5rem - 0.0625rem)',
    )}
    ${ifProp('small', '0.5rem', '1rem')};
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: all 0.15s ease;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none;
  }
`

const StyledLink = styled(
  ({ disabled, transparent, reverse, palette, theme, ...props }) => (
    <Link {...props} />
  ),
)`
  ${styles};
`
const Anchor = styled.a`
  ${styles};
`
const StyledButton = styled.button`
  ${styles};
`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
}

export default Button
