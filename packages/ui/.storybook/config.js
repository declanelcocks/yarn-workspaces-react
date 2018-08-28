import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { setOptions } from '@storybook/addon-options'
import Wrapper from './Wrapper'
import './mockNextRouter'

import './style.css'

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(req)
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
setOptions({
  hierarchyRootSeparator: /\|/,
})

addDecorator(story => <Wrapper>{story()}</Wrapper>)

configure(loadStories, module)
