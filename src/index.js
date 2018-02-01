import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'

import './styles/styles.scss'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

//  Since github pages is a static server, we need to use HashRouter
const Router = window.location.host.includes('github') ? HashRouter : BrowserRouter

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </React.Fragment>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
