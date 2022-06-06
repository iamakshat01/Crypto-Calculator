import React from 'react'

type Props = {
    setInputVal: React.Dispatch<React.SetStateAction<number>>,
    setAlert: React.Dispatch<React.SetStateAction<boolean>>,
    alert: boolean,
}

const Textfield: React.FC<Props> = ({setInputVal, setAlert, alert}) => {

    const numValidator = (text: string) => {
        let regex = /^[0-9]*\.?[0-9]*$/
        console.log(text)
        return text.match(regex)
    }

  return (
    <div className="form-control w-full max-w-md">
        <input type='text' placeholder="Insert currency amount here" className="input input-bordered input-primary w-full text-base" 
        onChange={(e) => {
            //Shows alert if NaN, will NOT update setInputVal state if NaN
            numValidator(e.target.value) ? setAlert(false) : setAlert(true)
            {!alert && setInputVal(parseInt(e.target.value))}
            }}/>
    </div>
  )
}

export default Textfield