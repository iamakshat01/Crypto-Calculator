import React, {useState, useEffect} from 'react'
import SelectDropdown from './ui/SelectDropdown'
import Textfield from './ui/Textfield';
import Alert from './ui/Alert';
import { dataType, exchangeInput } from '../data/types'
import axios from 'axios'

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
    // State for storing result
    const [result, setResult] = useState<string>();

    //Sets timer on Alert component, disappears after 2 seconds
    useEffect(() => {
        if(alert){
            setTimeout(() => {
                setAlert(false)
            }, 4000);
        }
    }, [alert])


    useEffect(() => {
        
        const fetchData = async () => {
            const res1 = await axios.get(process.env.BASE_API+`simple/price?ids=${exchange1?.value}&vs_currencies=usd`);
            const res2 = await axios.get(process.env.BASE_API+`simple/price?ids=${exchange2?.value}&vs_currencies=usd`);
            const price1 = res1["data"][exchange1!.value]["usd"]
            const price2 = res2["data"][exchange2!.value]["usd"]
            let res = (price1/price2)*(inputVal)
            // console.log(`Result: ${inputVal} : ${res}`);
            setResult(res.toFixed(2));
        }

        if(exchange1?.value && exchange2?.value)
            fetchData();

    },[exchange2,exchange1,inputVal])
    
    const options = exchData.map((exchange: dataType)=>{
        return {
            value:exchange.id,
            label:exchange.name
        }
    })

    const handleReverse = () => {
        const temp={...exchange1} as exchangeInput;
        setExchange1(exchange2);
        setExchange2(temp);
    }

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
                <SelectDropdown  parent={exchange1} onChange={setExchange1} data={options} fillerText='Select currency'/>
                {/* Insert switch BTN here */}
                <span onClick={handleReverse} className="bg-purple-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 p-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </span>
                {/* <span className='font-semibold dark:text-white'> To: </span> */}
                <SelectDropdown  parent={exchange2} onChange={setExchange2} data={options} fillerText='Select currency'/>
            </div>
            

            {/* Display exchanged value here */}
            {!alert && result && <span className="text-xl text-purple-700 dark:text-purple-200">

                <span> Result : {inputVal} {exchange1?.label} &#8776; </span>
                <span className="font-bold"> {result} </span>
                <span> {exchange2?.label}</span>

            </span>}

        </div>
    </div>
  )
}

export default Main