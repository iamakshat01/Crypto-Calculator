import React from 'react';
import Select from 'react-select';
import { exchangeInput } from '../../data/types'

interface DropdownProps{
  data: any,
  fillerText: string,
  parent?: exchangeInput,
  onChange: any
}


const SelectDropdown = (props:DropdownProps)  => {

    return (
      <div className="w-full max-w-xs flex-initial">
        <Select
          value={props.parent}
          className="basic-single"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          name="color"
          options={props.data}
          onChange={props.onChange}
        />
      </div>
    );
}


export default SelectDropdown