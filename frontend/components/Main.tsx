import React, {useState, useEffect} from 'react'
import SelectDropdown from './ui/SelectDropdown'
import Textfield from './ui/Textfield';
import Alert from './ui/Alert';

import { dataType } from '../data/types'


type Props = {
    exchData: any,
};

const Main: React.FC<Props> = ({exchData}) => {
    //Number value of textfield
    const [inputVal, setInputVal] = useState<number>(0)
    //State to determine whether input is a valid input or not
    const [alert, setAlert] = useState<boolean>(false)

    //Sets timer on Alert component, disappears after 2 seconds
    useEffect(() => {
        if(alert){
            setTimeout(() => {
                setAlert(false)
            }, 4000);
        }
    }, [alert])


  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-200 dark:bg-zinc-800'>
        <div className='container w-8/12 h-4/6 bg-base-100 flex flex-col justify-start items-center space-y-10 px-5 shadow-lg shadow-indigo-500 rounded-3xl dark:bg-zinc-900'>
            <div className='flex w-full mt-10 max-h-15'>
                {alert && <Alert />}
            </div>
            <div className='flex w-full justify-center'>
                <Textfield setInputVal={setInputVal} alert={alert} setAlert={setAlert}/>  
            </div>
            <div className='flex flex-col w-full space-y-3 justify-center items-center md:flex-row md:space-x-3 md:space-y-0 '>
                <SelectDropdown data={exchData} fillerText='Select currency'/>
                <span className='font-semibold dark:text-white '> To: </span>
                <SelectDropdown data={exchData} fillerText='Select currency'/>
            </div>
            
            {/* Insert switch BTN here */}

            {/* Display exchanged value here */}
            {!alert && <></>}

        </div>
    </div>
  )
}

export default Main