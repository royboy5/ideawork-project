import React from 'react'
import PropTypes from 'prop-types'

import GridBox from './GridBox'

const GridList = props => {
  return (
    <article className='grid'>
      {props.gridItems.map(item => {
        return <GridBox gridItem={item} key={item.title} />
      })}
    </article>
  )
}

GridList.propTypes = {
  gridItems: PropTypes.array.isRequired
}

export default GridList
