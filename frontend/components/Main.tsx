import React, {useState, useEffect} from 'react'
import SelectDropdown from './ui/SelectDropdown'
import Textfield from './ui/Textfield';
import Alert from './ui/Alert';
import { dataType, exchangeInput } from '../data/types'


type Props = {
    exchData: dataType[],
};



const Main: React.FC<Props> = ({exchData}) => {
    //Number value of textfield
    const [inputVal, setInputVal] = useState<number>(0)
    //State to determine whether input is a valid input or not
    const [alert, setAlert] = useState<boolean>(false)
    // State for exchange input 1
    const [exchange1,setExchange1] = useState<exchangeInput>();
    // State for exchange input 2
    const [exchange2,setExchange2] = useState<exchangeInput>();

    //Sets timer on Alert component, disappears after 2 seconds
    useEffect(() => {
        if(alert){
            setTimeout(() => {
                setAlert(false)
            }, 4000);
        }
    }, [alert])
    
    const options = exchData.map((exchange: dataType)=>{
        return {
            value:exchange.id,
            label:exchange.name
        }
    })

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
                <SelectDropdown  onChange={setExchange1} data={options} fillerText='Select currency'/>
                <span className='font-semibold dark:text-white p-2'> To: </span>
                <SelectDropdown  onChange={setExchange2} data={options} fillerText='Select currency'/>
            </div>
            
            {/* Insert switch BTN here */}

            {/* Display exchanged value here */}
            {!alert && <></>}

        </div>
    </div>
  )
}

export default Main