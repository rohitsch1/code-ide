import React, { useContext, useState } from 'react'
import { CloseButton, Header, Heading, Input } from '../Model'
import {IoCloseSharp} from 'react-icons/io5'
import { ModelContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'


const EditFolder = () => {
  const { closeModal, isOpenModal } = useContext(ModelContext);
  const { editFolderTitle, folders } = useContext(PlaygroundContext);

  const folderId = isOpenModal.identifiers.folderId;
  const [folderTitle, setFolderTitle] = useState(folders[folderId].title);

  return (
    <>
      <Header>
        <h2>Edit Folder Title</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
        
      </Header>
      
   
      <Input>
        <input type="text" onChange={(e) => setFolderTitle(e.target.value)} />
        <button onClick={() => {
          editFolderTitle(folderId, folderTitle)
          closeModal()
        }} >Update Title</button>
      </Input>
    </>
  )
}

export default EditFolder;

