import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

export default function Total() {

    const[data , setData] = useState([])
console.log("data" , data)
    // useEffect(() => {
    //     axios.get("http://localhost:2348/cod/individual/india").then((res) => setData(res.data)).catch((err) => console.log(err))
    // },[])

    // useEffect(() => {
    //     axios.get("http://localhost:2348/cod/Countries").then((res) => setData(res.data)).catch((err) => console.log(err))
    // },[])

    useEffect(() => {
        axios.get("http://localhost:2348/cod/Global").then((res) => setData(res.data)).catch((err) => console.log(err))
    },[])

  return (
    <div>
      <h1>Total</h1>
    </div>
  )
}
