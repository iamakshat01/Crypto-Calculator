import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

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
      const res = await axios.get(process.env.BASE_API+'/exchanges/', {
        headers: {
        'X-CoinAPI-Key': process.env.API_KEY!
        }
      });
      console.log(res);
      setExchData(res.data)
    }
    fetchData();
    console.log(fetchWithExchangeId('ECB'))
  }, [])

  // fetches the details of exchange with given id
  const fetchWithExchangeId = async (id: string) => {
    const res = await axios.get(process.env.BASE_API+'/exchanges/'+id,{
      headers: {
        'X-CoinAPI-Key': process.env.API_KEY!
      }
    })
    return res;
  }


  return (
    <>
      <Header setMode={setMode} nightMode={nightMode}/>
      <Main exchData={exchData}/>
    </>
  )
}

export default Home
