
import styled from "styled-components";

export const CarrinhoArea = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 30px;
  margin-top: 50px;

  div {
    height: auto;
    width: 330px;
    border: 1px solid rgb(194, 193, 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    button {
      margin-bottom: 30px;
      font-size: 50px;
      background: transparent;
      border: none;
      color: teal;
    }

  }
`;