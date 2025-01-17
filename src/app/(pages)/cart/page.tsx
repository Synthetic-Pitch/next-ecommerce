'use client'


import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const Page = () => {

  const FilterValue = useSelector((state:RootState) => state.filter.filter);
  
  const logger = () => console.log(FilterValue);
  
 
  return (
    <div>
      <button onClick={logger}>render redux filter</button>
    </div>
  )
}

export default Page