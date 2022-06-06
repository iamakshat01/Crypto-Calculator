import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import axios from 'axios'

const Home: NextPage = () => {
  
  useEffect(() => {
    
    // fetches complete list of available exchanges and returns it in the form of array
    const fetchData = async () => {
      const res = await axios.get(process.env.BASE_API+'/exchanges/', {
        headers: {
         'X-CoinAPI-Key': process.env.API_KEY!
        }
      });
      // console.log(res);
    }
    
    fetchData();
    console.log(fetchWithExchangeId('ECB'))
  })

  // fetches a details of exchange with given id
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
      <Header/>
    </>
  )
}

export default Home
