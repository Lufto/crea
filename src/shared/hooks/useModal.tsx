import { ModalContext } from '@/widgets/Modal/ModalContext';
import { useContext } from 'react';

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
};