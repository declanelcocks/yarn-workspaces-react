import React from 'react'
import Helmet from 'react-helmet'
import { add } from '@declan/common'

import config from '../../../../config'

import Heading from '../../atoms/Heading'
import P from '../../atoms/P'

function HomeRoute() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Heading level={2}>{config('welcomeMessage')}</Heading>

      <P>Welcome to our boilerplate!</P>
      <P>Hello from @declan/common: {add(1, 2)}</P>
    </div>
  )
}

export default HomeRoute
