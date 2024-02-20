import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Model from '../../components/Model'
import LeftComponenet from './LeftComponenet'
import RightComponent from './RightComponent'
import { ModelContext } from '../../context/ModalContext'

const StyledHome=styled.div`
width:100%;
height:100vh;

`
const Home = () => {
  // const[isOpenModal,setIsOpenModal]=useState(false)
  const {isOpenModal}=useContext(ModelContext)
  // console.log({isOpenModal});
  
  return (
   <StyledHome>
    
    <LeftComponenet/>
    <RightComponent/>
    {isOpenModal.show && <Model/>}
   </StyledHome>
  )
}

export default Home