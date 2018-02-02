import React from 'react'
import PropTypes from 'prop-types'

const GridBox = (props) => {
  return (
    <article>
      <div>{props.gridItem.img}</div>
      <div>{props.gridItem.date}</div>
      <h1>{props.gridItem.title}</h1>
      <div>{props.gridItem.presentedBy}</div>
    </article>
  )
}

GridBox.propTypes = {
  gridItem: PropTypes.object.isRequired
}

export default GridBox
