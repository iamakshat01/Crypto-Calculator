import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

//Added dataType for api call
import { dataType } from '../data/types'

import axios from 'axios'


const Home: NextPage = () => {
  const [exchData, setExchData] =  useState<Array<dataType>>([])
  const [nightMode, setMode] = useState<boolean>(false)

  useEffect(() => {
    // fetches complete list of available exchanges and returns it in the form of array
    const fetchData = async () => {
      const res = await axios.get(process.env.BASE_API+'coins/markets?vs_currency=usd&category=solana-ecosystem&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      res.data = res.data.map((exchange: dataType)=> {
        return {
          id: exchange.id,
          name: exchange.name
        }
      })
      setExchData(res.data)
      // console.log(res.data);
    }
    fetchData();
  }, [])

  return (
    <>
      <Header setMode={setMode} nightMode={nightMode}/>
      <Main exchData={exchData}/>
    </>
  )
}

export default Home
