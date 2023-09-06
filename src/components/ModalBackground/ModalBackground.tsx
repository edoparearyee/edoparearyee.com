import React, { PropsWithChildren } from 'react';

import styles from './ModalBackground.module.scss';

type ModalBackgroundProps = PropsWithChildren<{}>;

const ModalBackground: React.FC<ModalBackgroundProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={styles['modal-background']}>
      {children}
    </div>
  );
};

export default ModalBackground;
