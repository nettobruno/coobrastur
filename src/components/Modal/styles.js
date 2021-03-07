import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px 40px;

  h2 {
    color: #08436f;
    font-size: 22px;
    font-weight: 700;
  }
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
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

  :hover {
    background-color: #029bd9;
  }
`;
export const ButtonOutline = styled.button`
  border: 1px solid #08436f;
  border-radius: 10px;
  background-color: white;
  color: #08436f;

  font-size: 14px;
  text-transform: uppercase;

  padding: 12px;
  margin-top: -10px;

  width: 100%;

  cursor: pointer;
`;
