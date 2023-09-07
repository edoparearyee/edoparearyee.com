'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';

import Modal, { ModalProps } from '../Modal/Modal';
import setBackgroundScroll from '../../utils/backgroundScroll';

type OpenModalOptions = {
  content: React.ReactNode;
  onModalClose?: () => void;
} & ModalProps;

export interface ModalContextProps {
  openModal: (options: OpenModalOptions) => void;
  closeModal: () => void;
}

export const defaultModalContextValues: ModalContextProps = {
  openModal: () => null,
  closeModal: () => null,
};

export const ModalContext = React.createContext<ModalContextProps>(
  defaultModalContextValues,
);

export type ModalProviderProps = PropsWithChildren<{}>;

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalOptions, setModalOptions] = useState<OpenModalOptions>();

  const openModal = (options: OpenModalOptions): void => {
    setModalOptions(options);
    setIsOpen(true);
    setBackgroundScroll(false);
  };

  const closeModal = (): void => {
    setBackgroundScroll(true);
    modalOptions && modalOptions.onModalClose && modalOptions.onModalClose();
    setModalOptions(undefined);
    setIsOpen(false);
  };

  useEffect(() => {
    setBackgroundScroll(!isOpen);
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <Modal {...modalOptions}>{modalOptions && modalOptions.content}</Modal>
      )}
    </ModalContext.Provider>
  );
};
