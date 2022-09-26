import styled from "styled-components";

export const UlStyled = styled.ul`
  width: 100%;
  height: 50vh;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding-bottom: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    outline: 1px solid ${({ theme }) => theme.color.blue4};

    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.color.blue4};

    box-shadow: 0 3px 3px rgb(0 0 0 / 0.1);

    .data {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      color: ${({ theme }) => theme.color.black1};
      font-weight: bold;

      span {
        font-weight: 400;
      }
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      button {
        padding: 0.35rem;
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.color.black1};
        font-weight: bold;
      }

      button:hover {
        filter: brightness(1.2);
      }

      .edit-btn {
        background-color: ${({ theme }) => theme.color.blue2_dark};
      }

      .delete-btn {
        background-color: ${({ theme }) => theme.color.orange1};
      }
    }
  }
`;
