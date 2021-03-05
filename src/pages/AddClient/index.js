// Dependencies
import React, { useRef } from 'react';

// Components
import SimpleInput from '../../components/SimpleInput';

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
  const formRef = useRef();

  async function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Header>
        <div className="container">
          <img src={logo} alt="" />

          <div className="block-logout">
            <img src={logout} alt="" />
            <p>Sair</p>
          </div>
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
            <ButtonOutline type="button">Voltar</ButtonOutline>
          </Inline>
        </FormContent>
      </Container>
    </>
  );
}

export default AddClient;
