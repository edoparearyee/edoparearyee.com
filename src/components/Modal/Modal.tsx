import React, { PropsWithChildren, useContext } from 'react';
import classNames from 'classnames';

import ModalBackground from '../ModalBackground/ModalBackground';
import { ModalContext } from '../ModalProvider/ModalProvider';
import Button from '../Button/Button';
import Type from '../Type/Type';
import BurgerMenuIcon from '../Icons/BurgerMenuIcon/BurgerMenuIcon';

import styles from './Modal.module.scss';

type ModalVariant = 'text' | 'image';

export type ModalProps = PropsWithChildren<{
  className?: string;
  title?: string;
  hasCloseBtn?: boolean;
  variant?: ModalVariant;
}>;

const Modal: React.FC<ModalProps> = ({
  className,
  title,
  hasCloseBtn = true,
  variant = 'text',
  children,
  ...props
}) => {
  const Inner: React.FC = () => {
    const { closeModal } = useContext(ModalContext);

    return (
      <>
        {title?.length ? (
          <div className={styles.modal__title}>
            <Type
              renderAs="h2"
              appearance="h4"
              className={classNames(styles['modal__title-type'], {
                [styles['modal__title-type--no-padding']]: !hasCloseBtn,
              })}
            >
              {title}
            </Type>
          </div>
        ) : null}
        {hasCloseBtn && (
          <div className={styles['modal__close-icon']}>
            <Button
              renderAs="button"
              appearance="none"
              onClick={() => closeModal()}
            >
              <BurgerMenuIcon state="close" color="light" />
            </Button>
          </div>
        )}
      </>
    );
  };

  return (
    <ModalBackground>
      <div
        {...props}
        className={classNames(
          styles.modal,
          styles[`modal__variant-${variant}`],
          className,
        )}
      >
        <Inner />
        {children}
      </div>
    </ModalBackground>
  );
};

export default Modal;
