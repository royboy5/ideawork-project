import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'

import './utils/polyfill'

import './styles/styles.scss'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

import {items, slides} from './sampleData'

//  Since github pages is a static server, we need to use HashRouter
const Router = window.location.host.includes('github') ? HashRouter : BrowserRouter

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path='/'>
        <Home gridItems={items} rotator={slides} />
      </Route>
      <Footer />
    </React.Fragment>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
