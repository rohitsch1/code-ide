import React, { useContext } from 'react'
import styled from 'styled-components'
import { ModelContext } from '../context/ModalContext'
import EditFolder from './ModalTypes/EditFolder'
import EditPlayGroundTitle from './ModalTypes/EditPlayGroundTitle'
import Loading from './ModalTypes/Loading'
import NewFolder from './ModalTypes/NewFolder'
import NewPlayGround from './ModalTypes/NewPlayGround'
import NewPlaygroundAndFolder from './ModalTypes/NewPlaygroundAndFolder'



const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;

width:100%;
height:100vh;
background-color:rgba(0,0,0,0.8);
display:flex;
justify-content:center;
align-items:center;
`

const ModalContent=styled.div`
background-color:#fff;
padding:0.5rem;
// display:flex;
// flex-direction:column;
`

export const Header=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
// border-bottom:2px solid black;
`

export const Heading=styled.h3`
font-size:1.5rem;
font-weight:400;
span{
    font-weight:700;
}
`

export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;
  input {
    flex-grow: 1;
    height: 2rem;
  }
  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0.1rem 2rem;
  }
`;

const Model = () => {
    // const type=3;
    const{isOpenModal}=useContext(ModelContext)
    const {modalType}=isOpenModal;
    // console.log(modalType)
  return (
    <ModalContainer>
        <ModalContent>
            {modalType===1 &&<NewFolder/>}
            {modalType===2 &&<NewPlayGround/>}
            {modalType===3 &&<NewPlaygroundAndFolder/>}
            {modalType===4 &&<EditFolder/>}
            {modalType===5 &&<EditPlayGroundTitle/>}
            {modalType===6 && <Loading/>}
           
            {/* <NewFolder/> */}
            {/* <NewPlayGround/>
            <NewPlaygroundAndFolder/> */}
            
        </ModalContent>
    </ModalContainer>
  )
}

export default Model