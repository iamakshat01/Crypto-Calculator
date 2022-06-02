import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
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
      console.log(res);
    }
    fetchData();

  })



  return (
    <h1 className="text-3xl font-bold underline text-red-400">
      Crypto Exchange!
    </h1>
  )
}

export default Home
