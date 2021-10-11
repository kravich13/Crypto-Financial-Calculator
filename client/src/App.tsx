import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Title } from './components/navbar/Title'
import { Main } from './pages/Main'
import { Unfaithful } from './pages/Unfaithful '

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Title />

        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Unfaithful} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
