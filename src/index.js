import React from 'react'
import { render } from 'react-dom'
import { Controller } from 'cerebral'
import App from './App'
import { Container } from 'cerebral/react'
import Devtools from 'cerebral/devtools'

const controller = Controller({
  devtools: Devtools(),
  state: {
    title: 'Title'
  }
})

render((
  <Container controller={controller}>
    <App />
  </Container>
), document.querySelector('#root'))
