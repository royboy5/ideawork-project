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
      imgHeight: 240
    }

    this.renderSlides = this.renderSlides.bind(this)
    this.calcImgHeight = this.calcImgHeight.bind(this)
  }

  renderSlides (slide, key) {
    const styles = {
      backgroundImage: `url(${slide.image})`,
      minHeight: this.state.imgHeight
    }

    return (
      <div className='img' key={key} style={styles}>
        <div className='legend'>
          <h1>{slide.title}</h1>
          <h2>{slide.date}</h2>
          <p>{slide.text}</p>
        </div>
      </div>
    )
  }

  // calculations to maintain 4:3 img ratio
  calcImgHeight () {
    let height = 240

    if (window.innerWidth > 320 && window.innerWidth < 772) {
      height = (3 * window.innerWidth) / 4
    } else if (window.innerWidth >= 772) {
      height = 579
    }

    console.log(window.innerWidth)
    this.setState({
      imgHeight: height
    })
  }

  componentDidMount () {
    this.calcImgHeight()
    window.addEventListener('resize', this.calcImgHeight)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.calcImgHeight)
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
        infiniteLoop>

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
