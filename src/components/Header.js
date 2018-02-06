import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import Navigation from './Navigation'

class Header extends Component {
  render () {
    return (
      <header className='fixed-header'>
        <div className='container'>
          <Link to={'/'}><img src={logo} alt={'Sparta Plaesent'} /></Link>
          <div>
            <span className='info'>212.555.5555</span>
            <a className='info' href='#'>Login</a>

            <div id='menuToggle'>
              <input type='checkbox' id='checkbox' />
              <label htmlFor='checkbox'>
                <span />
                <span />
                <span />
              </label>
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
