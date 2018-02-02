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

const items = [
  {
    img: 'image',
    date: 'date',
    title: 'title',
    presentedBy: 'present by'
  },
  {
    img: 'image2',
    date: 'date2',
    title: 'title2',
    presentedBy: 'present by2'
  }
]

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Route exact path='/'>
        <Home gridItems={items} />
      </Route>
      <Footer />
    </React.Fragment>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
