// Dependencies
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as userActions from '../../store/ducks/auth';

import api from '../../services/api';

// Components
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';
import Loader from '../../components/Loader';

// Images
import logo from '../../assets/logo.svg';

// styles
import { Container, Content, FormContent, Button } from './styles';

function Login() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setLoader] = useState(false);

  async function handleFormSubmit(data) {
    if (data.email === '') {
      showToast({
        type: 'error',
        message: 'O campo de E-mail é obrigatório',
      });

      return;
    }
    if (data.password === '') {
      showToast({
        type: 'error',
        message: 'O campo de Senha é obrigatório',
      });

      return;
    }

    try {
      setLoader(true);
      const response = await api.post('/api/login', {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;

      dispatch(userActions.login(token));

      showToast({
        type: 'success',
        message: 'Login realizado com sucesso!',
      });

      history.push('/home');
      setLoader(false);
    } catch (err) {
      console.log(err);
      showToast({
        type: 'error',
        message: 'Ops, algo deu errado. Tente Novamente!',
      });

      setLoader(false);
    }
  }

  return (
    <Container>
      <Content>
        <Loader loader={loader} />
        <img src={logo} alt="Logo Coobrastur" />
        <FormContent ref={formRef} onSubmit={handleFormSubmit}>
          <SimpleInput name="email" label="E-mail" type="text" />
          <SimpleInput name="password" label="Senha" type="password" />
          <Button type="submit">Acessar o Sistema</Button>
        </FormContent>
      </Content>
    </Container>
  );
}

export default Login;
