import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Rotator from './home/Rotator'
import GridList from './home/GridList'

class Home extends Component {
  render () {
    console.log(this.props.gridItems)
    return (
      <React.Fragment>
        <Rotator />
        <GridList gridItems={this.props.gridItems} />
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  gridItems: PropTypes.array.isRequired
}

export default Home
