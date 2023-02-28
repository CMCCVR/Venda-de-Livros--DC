import styled from "styled-components";

export const ContainerPage = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 350px;
  margin: auto;
  margin-top: 20 px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ccc;

  h1 {
    font-size: 24px;
  }
  .organize {
    display: flex;

    a {
      color: #000;
    }
  }

  p {
    font-size: 13px;
    color: #9c9c9c;
  }

  .form--input {
    text-align: left;

    label {
      display: block;
    }

    input {
      margin-bottom: 20px;
      padding: 10px;
      font-size: 16px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 280px;
      transition: 0.3s;

      &:hover {
        border: 2px solid #7d2ae8;
      }
    }
  }  
`;