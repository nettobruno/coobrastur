import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;

  img {
    width: 50%;
    margin-bottom: 40px;
  }
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: #08436f;
  border-radius: 10px;
  color: white;

  font-size: 14px;
  text-transform: uppercase;

  padding: 12px;
  margin-top: -10px;

  cursor: pointer;
`;
