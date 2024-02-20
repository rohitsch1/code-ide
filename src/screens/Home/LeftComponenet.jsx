import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { ModelContext } from '../../context/ModalContext'

const StyledLeftComponenet=styled.div`
position:fixed;
width:40%;
height:100vh;
background-color:#241f21;
display:flex;
justify-content:center;
align-items:center;
`
const ContentContainer=styled.div`
text-align:center

`
const MainHeading=styled.h1`
font-size:3rem;
font-weight:400;
color:#fff;
margin-bottom:1rem;
span{
    font-weight:700; 
}
`

const SubHeading=styled.div`
font-size:1.75rem;

color:#fff;
opacity:0.7;
margin-bottom:1rem;
`

const Logo=styled.img`
width:165px;
margin-bottom:1rem;
`

const AddPlayground=styled.button`
padding: 0.75rem 1rem;
font-size:1.25rem;
border-radius:30px;
diplay:flex;
align-items:center;

span{
font-size:1.8rem;
font-weight:700;
}

&:hover{
    cursor:pointer;
}

`


const LeftComponenet = () => {
  // const {setModal}=useContext(ModelContext)

  const {openModal}=useContext(ModelContext)
  return (
    <StyledLeftComponenet>
        <ContentContainer>
            <Logo src={logo}  />
            <MainHeading> <span>Code</span>  Deck</MainHeading>
            <SubHeading>Code. Compile. Develop.</SubHeading>
            <AddPlayground onClick={()=>openModal(
              {
                show : true,
                modalType : 3,
                identifiers : {
                folderId : "",
                cardId : "",
                              }
              }
             )}>
              <span>+</span> Create New PlayGround</AddPlayground>
        </ContentContainer>
    </StyledLeftComponenet>
  )
}

export default LeftComponenet