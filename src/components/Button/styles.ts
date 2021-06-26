import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.purple};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
