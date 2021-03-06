// Dependencies
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/ducks/auth';
import api from '../../services/api';

// Components
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';

// Images
import logo from '../../assets/logo-grey.svg';
import logout from '../../assets/logout.svg';
import user from '../../assets/user.svg';

// Styles
import {
  Header,
  Container,
  FormContent,
  Inline,
  Button,
  ButtonOutline,
} from './styles';

function AddClient() {
  const history = useHistory();
  const formRef = useRef();
  const dispatch = useDispatch();

  async function handleFormSubmit(data) {
    if (data.name === '') {
      showToast({
        type: 'error',
        message: 'O campo de Nome é obrigatório',
      });

      return;
    }
    if (data.profession === '') {
      showToast({
        type: 'error',
        message: 'O campo de Profissão é obrigatório',
      });

      return;
    }

    try {
      const response = await api.post('/api/users', {
        name: data.name,
        job: data.profession,
      });

      console.log(response.data);

      showToast({
        type: 'success',
        message: 'Cadastro realizado com sucesso!',
      });

      history.push('/home');
    } catch (err) {
      console.log(err);
      showToast({
        type: 'error',
        message: 'Ops, algo deu errado. Tente Novamente!',
      });
    }
  }

  function logoutUser() {
    dispatch(userActions.login(null));
    history.push('/');
    showToast({
      type: 'success',
      message: 'Você saiu da sua conta com sucesso!',
    });
  }

  return (
    <>
      <Header>
        <div className="container">
          <img src={logo} alt="" />

          <button
            type="button"
            className="block-logout"
            onClick={() => logoutUser()}
          >
            <img src={logout} alt="" />
            <p>Sair</p>
          </button>
        </div>
      </Header>

      <Container className="container">
        <h1>
          <img src={user} alt="" />
          Painel de Clientes
        </h1>

        <h2>Novo cliente</h2>
        <p>Informe os campos a seguir para cadastrar um novo cliente:</p>

        <FormContent ref={formRef} onSubmit={handleFormSubmit}>
          <SimpleInput name="name" label="Nome" />
          <SimpleInput name="profession" label="Profissão" />
          <Inline>
            <Button type="submit">Cadastrar</Button>
            <ButtonOutline type="button" onClick={() => history.push('/home')}>
              Voltar
            </ButtonOutline>
          </Inline>
        </FormContent>
      </Container>
    </>
  );
}

export default AddClient;
