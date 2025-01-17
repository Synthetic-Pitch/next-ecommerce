import React from 'react'
import Filter from './filter'
import Mapping from './mapping';

const mainDish = () => {
  return (
    <div className=''>
        <div>
            <Filter/>
        </div>
        <div>
            <Mapping/>
        </div>
    </div>
  )
}

export default mainDish