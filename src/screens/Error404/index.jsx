import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate=useNavigate();

  useEffect(()=>
  {
    setTimeout(()=>
    {
      navigate('/')
    },3000)
  },[])
  return (
    <div>Error404 I will redirect You To HomePage</div>
  )
}

export default Error404