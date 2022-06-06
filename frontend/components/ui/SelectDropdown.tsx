import React, {useEffect} from 'react'
// import { dataType } from '../../data/types'

const SelectDropdown = (exchData: any) => {

  //Check to see if data is being passed down properly
  useEffect(() => {
    console.log(exchData.exchData)
  }, [exchData])

  return (
    <select className="select select-bordered w-full max-w-xs flex-initial">
        <option disabled selected>Choose Currency</option>
        {/*Conditional to prevent .map before data is ready  */}
        {exchData[1] && exchData.map((exchange: any) => {
            <option>{exchange.name}</option>
        })}
    </select>
  )
}

export default SelectDropdown