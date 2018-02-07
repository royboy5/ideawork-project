import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'

// carousel styles
import '../../../node_modules/react-responsive-carousel/lib/styles/main.css'
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.css'

class Rotator extends Component {
  constructor (props) {
    super(props)

    this.state = {
      slides: this.props.slides,
      currentSlide: 0
    }

    this.renderSlides = this.renderSlides.bind(this)
  }

  renderSlides (slide, key) {
    return (
      <div className='img' key={key} style={{ backgroundImage: `url(${slide.image})` }}>
        <div className='legend'>
          <h1>{slide.title}</h1>
          <h2>{slide.date}</h2>
          <p>{slide.text}</p>
        </div>
      </div>
    )
  }

  render () {
    console.log(this.state.slides)
    return (
      <Carousel
        className='rotator'
        showThumbs={false}
        emulateTouch
        showArrows={false}
        showStatus={false}
        autoPlay
        infiniteLoop={false}>

        {this.state.slides.map((slide, key) => {
          return this.renderSlides(slide, key)
        })}
      </Carousel>
    )
  }
}

Rotator.propTypes = {
  slides: PropTypes.array.isRequired
}

export default Rotator
