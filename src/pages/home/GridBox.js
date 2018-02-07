import React from 'react'
import PropTypes from 'prop-types'

const GridBox = (props) => {
  return (
    <figure className='grid-item' key={props.gridItem.key}>
      <img src={props.gridItem.img} alt={'props.gridItems.title'} onLoad={props.imgLoad} />
      <div className={'grid-item-date'}>{props.gridItem.date}</div>
      <a className={'grid-item-title'} href={'#'}>{props.gridItem.title}</a>
      <div className={'grid-item-by'}>Present by <a href={'#'}>{props.gridItem.presentedBy}</a></div>
      <hr />
      <div className={'grid-item-readme'}><a href='#'>Read More</a></div>
    </figure>
  )
}

GridBox.propTypes = {
  gridItem: PropTypes.object.isRequired,
  imgLoad: PropTypes.func
}

export default GridBox

// TODO: README box when the box is in hovered state
