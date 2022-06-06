import React from 'react'

interface ToggleProps{
    toggleTitle: string,
    toggleFunc: any
}

const Toggle = (props: ToggleProps) => {
  return (
    <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">{props.toggleTitle}</span> 
            <input type="checkbox" className="toggle" onChange={e => props.toggleFunc(e.target.checked)} />
        </label>
  </div>
  )
}

export default Toggle