import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './styles/styles.scss'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => (
  <Router>
    <React.Fragment>
      <Header />

      <Footer />
    </React.Fragment>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
