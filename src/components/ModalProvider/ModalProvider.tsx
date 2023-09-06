'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import classNames from 'classnames';

import Modal, { ModalProps } from '../Modal/Modal';
import setBackgroundScroll from '../../utils/backgroundScroll';

import styles from './ModalProvider.module.scss';

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
      <div
        data-testid="user-select-div"
        className={classNames({
          [styles['modal-provider__select-lock']]: isOpen,
        })}
      >
        {children}
      </div>
      {isOpen && (
        <Modal {...modalOptions}>{modalOptions && modalOptions.content}</Modal>
      )}
    </ModalContext.Provider>
  );
};
