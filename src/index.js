import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'

import './styles/styles.scss'
import registerServiceWorker from './registerServiceWorker'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

import ev1 from './images/ev1.png'
import ev2 from './images/ev2.png'
import ev3 from './images/ev3.png'
import ev4 from './images/ev4.png'
import ev5 from './images/ev5.png'
import ev6 from './images/ev6.png'
import slide1 from './images/slide1.png'
import slide2 from './images/slide2.png'

//  Since github pages is a static server, we need to use HashRouter
const Router = window.location.host.includes('github') ? HashRouter : BrowserRouter

const items = [
  {
    img: ev1,
    date: 'FEBRUARY 10 2017',
    title: 'Bureaux exquisite delightful carefully curated soft power.',
    presentedBy: 'Lorem Ipsum'
  },
  {
    img: ev2,
    date: 'FEBRUARY 2 2017',
    title: 'Sharp bureaux sleepy K-pop carefully curated.',
    presentedBy: 'Lorem Ipsum'
  },
  {
    img: ev3,
    date: 'JANUARY 27 2017',
    title: 'St Moritz uniforms Beams.',
    presentedBy: 'Lorem Ipsum'
  },
  {
    img: ev4,
    date: 'JANUARY 21 2017',
    title: 'Esse airport veniam ryokan soft power.',
    presentedBy: 'Lorem Ipsum'
  },
  {
    img: ev5,
    date: 'JANUARY 18 2017',
    title: 'K-pop extraordinary.',
    presentedBy: 'Lorem Ipsum'
  },
  {
    img: ev6,
    date: 'JANUARY 12 2017',
    title: 'Artisanal iconic cutting-edge business class.',
    presentedBy: 'Lorem Ipsum'
  }
]

const slides = [
  {
    image: slide1,
    title: 'Screening: \n DVF Secret Agent Part 2',
    date: 'October 15, 2017',
    text: 'Join us for a private screening of the DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
  },
  {
    image: slide2,
    title: 'Screening: \n DVF Secret Agent Part 2',
    date: 'October 15, 2017',
    text: 'Join us for a private screening of the DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
  }
]

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
