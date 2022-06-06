import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { dataType,exchangeInput } from '../../data/types'

interface DropdownProps{
  data: any,
  fillerText: string,
  onChange: React.Dispatch<React.SetStateAction<exchangeInput>>
}


const SelectDropdown = (props:DropdownProps)  => {

    return (
      <div className="w-full max-w-xs flex-initial">
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={props.fillerText}
          isClearable={true}
          isSearchable={true}
          name="color"
          options={props.data}
          onChange={props.onChange}
        />

        <div
          style={{
            color: 'hsl(0, 0%, 40%)',
            display: 'inline-block',
            fontSize: 12,
            fontStyle: 'italic',
            marginTop: '1em',
          }}
        >
        </div>
      </div>
    );
}


export default SelectDropdown