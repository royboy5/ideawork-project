import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import logo from '../images/logo.png'

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleBarClick = this.handleBarClick.bind(this)
  }
  handleBarClick (e) {
    console.log('bar clicked')
  }

  render () {
    return (
      <header className='container'>
        <img src={logo} alt={'Sparta Plaesent'} />
        <FontAwesomeIcon icon={faBars} size={'2x'}onClick={this.handleBarClick} />
      </header>
    )
  }
}

export default Header
