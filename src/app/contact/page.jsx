'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

export default function page() {

  useEffect(()=>{
    axios.get("/api/contact")
  },[])
  return (
    <section className=''>
      
    </section>
  )
}
