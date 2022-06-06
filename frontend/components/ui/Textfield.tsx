import React from 'react'

type Props = {
    setInputVal: React.Dispatch<React.SetStateAction<number>>;
}

const Textfield: React.FC<Props> = ({setInputVal}) => {
  return (
    <div className="form-control w-full max-w-xs pb-50 hover:">
        <input type="number" placeholder="Insert amount here" className="input input-bordered w-full max-w-xs" onChange={e => setInputVal(parseInt(e.target.value))}/>
    </div>
  )
}

export default Textfield