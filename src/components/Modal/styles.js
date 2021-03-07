import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  z-index: 11;
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
    color: #391463;
    font-size: 24px;
    font-weight: 500;
  }

  p {
    color: #57476e;
    font-size: 14px;
    font-weight: 300;
    margin: 15px 0;
  }

  .cancel {
    border: 1px solid #57476e;
    border-radius: 20px;
    padding: 5px 15px;
    color: #57476e;
    margin-right: 10px;

    font-weight: 500;
    font-size: 14px;
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
  color: #08436f;

  font-size: 14px;
  text-transform: uppercase;

  padding: 12px;
  margin-top: -10px;

  width: 100%;

  cursor: pointer;
`;
