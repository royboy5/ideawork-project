import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Rotator extends Component {
  render () {
    console.log(this.props)
    return (
      <div id='rotator'>
        <div className='slide'>
          <img src={this.props.slides.slide} />
        </div>
      </div>
    )
  }
}

Rotator.propTypes = {
  slides: PropTypes.object.isRequired
}

export default Rotator
