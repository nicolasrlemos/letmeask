import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import '../../styles/modal.scss';

type BackdropProps = {
  handleShowModal: () => void;
};

type ModalOverlayProps = {
  children: ReactNode;
};

type ModalProps = {
  onClick: () => void;
  children: ReactNode;
};

function Backdrop({ handleShowModal }: BackdropProps) {
  return <div className="backdrop" onClick={handleShowModal}></div>;
}

function ModalOverlay({ children }: ModalOverlayProps) {
  return <div className="modal">{children}</div>;
}

const portalElement = document.getElementsByName('overlays-root')[0];

export function Modal({ children, onClick }: ModalProps) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Backdrop handleShowModal={onClick} />,
        portalElement
      )}
    </React.Fragment>
  );
}
