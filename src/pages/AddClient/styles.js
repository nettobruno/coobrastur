import styled from 'styled-components';
import { Form } from '@unform/web';

export const Header = styled.div`
  background-color: #08436f;
  margin-bottom: 100px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .block-logout {
    background-color: transparent;

    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .block-logout p {
    color: white;
    margin-left: 5px;
  }

  @media (max-width: 600px) {
    .block-logout img {
      position: absolute;
      top: 30px;
      right: 10px;
      width: 20px;
    }

    .block-logout p {
      display: none;
    }
  }
`;

export const Container = styled.div`
  h1 {
    color: #08436f;
    font-size: 22px;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 10px;
  }

  h1 img {
    margin-right: 10px;
  }

  h2 {
    color: #4d4e59;
    font-size: 18px;
    margin: 20px 0 10px;
  }

  p {
    color: #666666;
  }
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 50px 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Inline = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: #08436f;
  border-radius: 5px;
  color: white;

  font-size: 14px;

  padding: 12px;
  margin-right: 5px;

  width: 100%;

  cursor: pointer;
`;

export const ButtonOutline = styled.button`
  border: 1px solid #08436f;
  background-color: white;
  border-radius: 5px;
  color: #08436f;

  font-size: 14px;

  padding: 12px;
  margin-left: 5px;

  width: 100%;

  cursor: pointer;
`;
