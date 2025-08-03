import Modal from '@/shared/lib/modal/modal';
import { createContext, useCallback, useState, type ReactNode } from 'react';

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {
    throw new Error('openModal должен быть определён в ModalProvider, бля!');
  },
  closeModal: () => {
    throw new Error('closeModal должен быть определён в ModalProvider, бля!');
  },
});

export const ModalProvider: FCClass = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback((content: ReactNode) => {
    document.body.classList.add('overflow-hidden');
    setModalContent(content);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    document.body.classList.remove('overflow-hidden');
    setModalOpen(false);
    setModalContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};