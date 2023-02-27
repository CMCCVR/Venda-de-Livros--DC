import styled from "styled-components";

export const ProductArea = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 30px;
  margin-top: 30px;

  div {
    height: auto;
    width: 330px;
    border: 10px solid rgb(194, 193, 193);
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
    button1 {
      margin-bottom: 30px;
      padding: 12px;
      border-radius: 20px;
      transition: 0.3s;
      font-size: 30px;
      background: orange;
      color: blueviolet;
      cursor: pointer;
    }
    button2 {
      margin-bottom: 1px;
      padding: 12px;
      border-radius: 20px;
      width: 100px;
      transition: 0.3s;
      font-size: 30px;
      background: yellow;
      color: blueviolet;
      cursor: pointer;
    }
  }
`;