import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { ModalContainer } from './styles';
import { BackdropContainer } from './backdropstyle';

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
  return (
    <BackdropContainer
      className="backdrop"
      onClick={handleShowModal}
    ></BackdropContainer>
  );
}

function ModalOverlay({ children }: ModalOverlayProps) {
  return <ModalContainer className="modal">{children}</ModalContainer>;
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
