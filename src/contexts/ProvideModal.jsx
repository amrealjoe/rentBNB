import React, { createContext, useEffect, useState } from 'react'
export const withModal = createContext(null)

export function ProvideModal({ children }) {
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    function toggleModal() { openModal(!modal) }

    const VALUES = {
        modal,
        openModal,
        closeModal,
        toggleModal
    }
    return (
        <withModal.Provider value={VALUES}>
            {children}
        </withModal.Provider>
    )
}
