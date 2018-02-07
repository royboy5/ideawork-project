/* eslint-disable no-undef */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GridItem from './GridItem'

class Grid extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imgCount: this.props.gridItems.length
    }

    this.onImageLoaded = this.onImageLoaded.bind(this)
  }

  componentDidMount () {
    this.grid = new Masonry(this.refs.grid, {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      itemSelector: '.grid-item',
      horizontalOrder: true,
      transitionDuration: '0.2s',
      initLayout: false
    })
  }

  // function to determine when all images are loaded so we can start masonry
  onImageLoaded () {
    this.setState({
      imgCount: this.state.imgCount - 1
    })

    if (this.state.imgCount <= 1) {
      // trigger initial layout
      this.grid.layout()
    }
  }

  render () {
    return (
      <article className='grid container' ref='grid'>
        <div className='grid-sizer' />
        <div className='gutter-sizer' />
        {this.props.gridItems.map((item, key) => {
          return <GridItem gridItem={item} key={key} imgLoad={this.onImageLoaded} />
        })}
      </article>
    )
  }
}

Grid.propTypes = {
  gridItems: PropTypes.array.isRequired
}

export default Grid
