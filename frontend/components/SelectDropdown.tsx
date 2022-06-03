import React from 'react'

const SelectDropdown = ({data}:any) => {
  return (
    <select className="select select-bordered w-full max-w-xs flex-initial">
        <option disabled selected>Choose Currency</option>    
        {data.map((currency:string) => {
            <option>{currency}</option>
        })}
    </select>
  )
}

export default SelectDropdown