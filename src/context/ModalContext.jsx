


import { createContext, useState } from "react";

export const ModelContext = createContext();

// ModalFields: {foldername, filename, language, type, isopenmodel}
export const ModalProvider=({children})=>{
    const initialModalFields = {
        show : false,
        modalType : "",
        identifiers : {
            folderId : "",
            cardId : "",
        }
    }

    const [isOpenModal, setIsOpenModal] = useState({ ...initialModalFields});

    const openModal = (value) => {
        setIsOpenModal(value)
    }

    const closeModal = () => {
        setIsOpenModal({ ...initialModalFields})
    }

    const ModalFeatures = {
        isOpenModal: isOpenModal,
        openModal: openModal,
        closeModal: closeModal
    }
    return (
        <ModelContext.Provider value={ModalFeatures}>
            {children}
        </ModelContext.Provider>
    )
}

