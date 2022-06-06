import React, {useEffect} from 'react'
// import { dataType } from '../../data/types'

interface DropdownProps{
  data: any,
  fillerText: string,
}

const SelectDropdown = (props: DropdownProps) => {

  //Check to see if data is being passed down properly
  useEffect(() => {
    console.log(props.data)
  }, [props.data])

  return (
    <select className="select select-bordered w-full max-w-xs flex-initial">
        <option disabled selected>{props.fillerText}</option>
        {/*Conditional to prevent .map before data is ready  */}
        {props.data[1] && props.data.map((exchange: any) => {
            <option>{exchange.name}</option>
        })}
    </select>
  )
}

export default SelectDropdown