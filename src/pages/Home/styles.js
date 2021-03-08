import styled from 'styled-components';

export const Header = styled.div`
  background-color: #08436f;
  margin-bottom: 100px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add {
    display: flex;

    border-radius: 9px;
    background-color: #f8fcff;
    color: #534c4c;

    text-transform: uppercase;

    padding: 10px 20px;
    margin-right: 20px;

    cursor: pointer;

    img {
      margin-right: 10px;
    }
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
    .add {
      padding: 10px;
      margin-right: 10px;

      position: absolute;
      top: 20px;
      left: 10px;

      img {
        margin-right: 0px;
      }

      p {
        display: none;
      }
    }

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
`;

export const ContentUsers = styled.div`
  margin-top: 20px;
`;

export const BlockUser = styled.div`
  border: 1px solid #e5e5e5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  p {
    font-size: 17px;
  }

  p.name {
    color: #08436f;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 100px;
      height: 100px;
      border-radius: 0px;
      margin-bottom: 10px;
    }

    p {
      font-size: 17px;
      margin-bottom: 10px;
    }

    p.name {
      color: #08436f;
      font-weight: bold;
    }
  }
`;

export const Total = styled.div`
  color: #534c4c;
  font-size: 17px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin: 50px auto;
`;

export const Button = styled.button`
  border: 1px solid #08436f;
  background-color: white;
  border-radius: 5px;
  color: #08436f;

  font-size: 14px;

  padding: 12px;
  margin-left: 5px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    background-color: #08436f;
    color: white;
  }
`;
