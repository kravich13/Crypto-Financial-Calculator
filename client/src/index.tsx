import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import '../node_modules/normalize.css/normalize.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
