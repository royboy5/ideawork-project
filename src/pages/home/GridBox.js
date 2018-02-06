import React from 'react'
import PropTypes from 'prop-types'

const GridBox = (props) => {
  return (
    <figure className='grid-item' key={props.gridItem.key}>
      <img src={props.gridItem.img} alt={'props.gridItems.title'} onLoad={props.imgLoad} />
      <div>{props.gridItem.date}</div>
      <h1>{props.gridItem.title}</h1>
      <div>Present by <a href={'#'}>{props.gridItem.presentedBy}</a></div>
    </figure>
  )
}

GridBox.propTypes = {
  gridItem: PropTypes.object.isRequired,
  imgLoad: PropTypes.func
}

export default GridBox

// TODO: README box when the box is in hovered state
