import React, { createContext, useState, useContext } from "react";

const ModalVisibilityContext = createContext();

export const useModalVisibility = () => useContext(ModalVisibilityContext);

export const ModalVisibilityProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <ModalVisibilityContext.Provider
      value={{ isModalVisible, openModal, closeModal }}
    >
      {children}
    </ModalVisibilityContext.Provider>
  );
};
