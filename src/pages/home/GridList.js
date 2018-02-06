import React from 'react'
import PropTypes from 'prop-types'

import GridBox from './GridBox'

const GridList = props => {
  return (
    <article className='grid container'>
      {props.gridItems.map((item, key) => {
        return <GridBox gridItem={item} key={key} />
      })}
    </article>
  )
}

GridList.propTypes = {
  gridItems: PropTypes.array.isRequired
}

export default GridList
