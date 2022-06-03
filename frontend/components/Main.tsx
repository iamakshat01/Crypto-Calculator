import React from 'react'
import SelectDropdown from './SelectDropdown'

const fillerData: Array<string> = [
    "Bitcoin",
    "Ethereum",
    "Solana",
    "Polygon",
    "DogeCoin"
]

const Main = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='container w-8/12 h-4/6 bg-base-100 shadow-xl flex justify-center items-center'>
            <div className=''>
                <SelectDropdown data={fillerData} />
            </div>
            <div className=''>
                <SelectDropdown data={fillerData} />
            </div>
        </div>
    </div>
  )
}

export default Main