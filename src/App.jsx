import React from 'react'
import { Provider } from 'react-redux'

import './App.scss'
import store from './store'
import Header from './components/NavBar/NavBar'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  )
}

export default App
