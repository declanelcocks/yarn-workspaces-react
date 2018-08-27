import React from 'react'
import styled from 'styled-components'

import Headroom from '../../utils/Headroom'
import Menu from '../../molecules/Menu'

const HeaderWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #5499c7;
`

function Header() {
  return (
    <Headroom
      render={() => (
        <HeaderWrapper>
          <Menu />
        </HeaderWrapper>
      )}
    />
  )
}

export default Header
