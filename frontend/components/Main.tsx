import React from 'react'
import SelectDropdown from './SelectDropdown'
import { dataType } from '../data/types'

const fillerData: Array<string> = [
    "Bitcoin",
    "Ethereum",
    "Solana",
    "Polygon",
    "DogeCoin"
]

const Main = (exchData: any) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='container w-8/12 h-4/6 bg-base-100 shadow-xl flex justify-center items-center'>
            <div className=''>
                <SelectDropdown exchData={exchData} />
            </div>
            <div className=''>
                <SelectDropdown exchData={exchData} />
            </div>
        </div>
    </div>
  )
}

export default Main