'use client'

import React from 'react'

interface StructureProps {
    DataProp:{
        name:string
    };
}

const Structure: React.FC<StructureProps> = ({DataProp}) => {
  return (
    <div 
        className='h-[150px] bg-[purple] flex justify-center items-center'
    >
        <div className=''>{DataProp.name}</div>
        
    </div>
  )
}

export default Structure;