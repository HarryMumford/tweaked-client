import React from 'react'
import { Provider } from 'react-redux'

import './App.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import store from './store'
import Header from './components/NavBar/NavBar'

library.add(faBars)

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  )
}

export default App
