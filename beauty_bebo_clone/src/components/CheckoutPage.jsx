import React, { useState } from 'react'
import CheckOutPage2 from './CheckOutPage2'
import CheckOutPage1 from './CheckOutPage1'
import data from "./oderedData.json"

export default function CheckOutPage() {
    // cart data will be added here
    const [orderedData,setOrderedData]=useState(data.products)
    
    const [show,setShow]=useState(false)
  function sshow(){
    console.log(show)
    setShow((show)=>!show)
  }
  console.log(orderedData)
  return (
    <div>{show?<CheckOutPage1 show={show} orderedData={orderedData} sshow={sshow}/>:<CheckOutPage2 orderedData={orderedData} show={show} sshow={sshow}/>}</div>
  )
}
