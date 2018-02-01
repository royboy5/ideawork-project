import React, {Component} from 'react'
// import PropTypes from 'prop-types'

import Rotator from './home/Rotator'
import FlexBox from './home/FlexBox'

class Home extends Component {
  render () {
    return (
      <div>
        <Rotator />
        <FlexBox />
        <FlexBox />
        <FlexBox />
        <FlexBox />
        <FlexBox />
        <FlexBox />
      </div>
    )
  }
}

// Home.propTypes = {}

export default Home
