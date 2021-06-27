import styled from 'styled-components';

export const QuestionContainer = styled.div`
  background: ${(props) => props.theme.colors.question};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #b39afe;
  }

  &.answered {
    background: #dbdcdd;

    footer .user-info span {
      color: #737380;
    }

    p {
      color: #737380;
    }
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #000;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 8px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      transition: background 0.2s;

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }

      img {
        padding-top: 2px;
      }

      &.like-button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
