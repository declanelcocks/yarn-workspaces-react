import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from 'next/link'

import Anchor from '.'

storiesOf('Atoms|Anchor', module)
  .add('default', () => (
    <Link href="/about">
      <Anchor>
        Super cool anchor
      </Anchor>
    </Link>
  ))
  .add('another palette', () => (
    <Link href="/about">
      <Anchor palette="secondary">
        Super cool anchor
      </Anchor>
    </Link>
  ))
  .add('external Anchor', () => (
    <Anchor href="https://google.com" palette="secondary" target="_blank">
      Super cool anchor
    </Anchor>
  ))
