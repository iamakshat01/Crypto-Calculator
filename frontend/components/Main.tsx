import React, {useState} from 'react'
import SelectDropdown from './ui/SelectDropdown'
import Textfield from './ui/Textfield';
import { dataType } from '../data/types'

type Props = {
    exchData: any
};

const Main: React.FC<Props> = ({exchData}) => {
    const [inputVal, setInputVal] = useState<number>(0)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='container w-8/12 h-4/6 bg-base-100 shadow-xl flex justify-center items-center space-x-4 shadow-indigo-600 rounded-3xl'>
            <div className=''>
                <Textfield setInputVal={setInputVal}/>  
            </div>
            <div className='flex w-100 '>
                <SelectDropdown exchData={exchData} />
                <SelectDropdown exchData={exchData} />
            </div>
        </div>
    </div>
  )
}

export default Main