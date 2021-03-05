// Dependencies
import React, { useRef } from 'react';
import api from '../../services/api';

// Components
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';

// Images
import logo from '../../assets/logo.svg';

// styles
import { Container, Content, FormContent, Button } from './styles';

function Login() {
  const formRef = useRef();

  async function handleFormSubmit(data) {
    if (data.email === '') {
      showToast({
        type: 'error',
        message: 'O campo de E-mail é obrigatório',
      });
    }
    if (data.password === '') {
      showToast({
        type: 'error',
        message: 'O campo de Senha é obrigatório',
      });
    }

    try {
      const response = await api.post('/api/login', {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;
      console.log(token);

      // dispatch(userActions.login(jwt));

      showToast({
        type: 'success',
        message: 'Login realizado com sucesso!',
      });

      // history.push('/dashboard');
    } catch (err) {
      console.log(err);
      showToast({
        type: 'error',
        message: 'Ops, algo deu errado. Tente Novamente!',
      });
    }
  }

  return (
    <Container>
      <Content>
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
