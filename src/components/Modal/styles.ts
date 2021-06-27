import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: slide-down 0.4s ease-out;

  width: 590px;
  height: 362px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  z-index: 30;

  .modal-container {
    padding: 64px;
  }

  .header-modal {
    text-align: center;
  }

  .body-modal {
    margin: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }

  .controls-modal {
    justify-content: center;
    padding: 24px;
    display: flex;
    gap: 8px;

    button {
      width: 160px;
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translate(-50%, -1000%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;
