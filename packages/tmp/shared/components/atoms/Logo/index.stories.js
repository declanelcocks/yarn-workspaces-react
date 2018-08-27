import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from '.'

storiesOf('Atoms|Logo', module)
  .add('default', () => <Logo />)
  .add('small', () => <Logo size="small" />)
