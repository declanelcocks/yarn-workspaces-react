import React from 'react'
import Helmet from 'react-helmet'

import P from '../../atoms/P'

function AboutRoute() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>About</title>
      </Helmet>

      <P>
        {`Welcome to the About page! `}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </P>
    </div>
  )
}

export default AboutRoute
