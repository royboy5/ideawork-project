import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Rotator from './home/Rotator'
import Grid from './home/Grid'

class Home extends Component {
  render () {
    console.log(this.props.gridItems)
    return (
      <React.Fragment>
        <Rotator slides={this.props.rotator} />
        <Grid gridItems={this.props.gridItems} />
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  gridItems: PropTypes.array.isRequired,
  rotator: PropTypes.array.isRequired
}

export default Home
