// Dependencies
import React, { useRef } from 'react';
import api from '../../services/api';

// Components
import SimpleInput from '../SimpleInput';
import { showToast } from '../Alert';

// Styles
import {
  Container,
  Content,
  FormContent,
  Button,
  ButtonOutline,
} from './styles';

function Modal({ setModal, modal, singleUser }) {
  const formRef = useRef();

  async function editUser(data, { reset }) {
    if (data.name === '') {
      showToast({
        type: 'error',
        message: 'O campo de Nome é obrigatório',
      });

      return;
    }
    if (data.job === '') {
      showToast({
        type: 'error',
        message: 'O campo de Profissão é obrigatório',
      });

      return;
    }

    try {
      await api.put(`/api/users/${singleUser.id}`, {
        name: data.name,
        job: data.job,
      });

      showToast({
        type: 'success',
        message: 'Usuário editado com sucesso!',
      });

      setModal(false);
      reset();
    } catch (err) {
      console.log(err);
      showToast({
        type: 'error',
        message: 'Ops, algo deu errado. Tente Novamente!',
      });
      reset();
    }
  }

  return (
    <Container visible={modal}>
      <Content>
        <h2>Editando usuário: {singleUser.first_name}</h2>

        <FormContent ref={formRef} onSubmit={editUser}>
          <SimpleInput name="name" label="Nome" type="text" />
          <SimpleInput name="job" label="Profissão" type="text" />
          <Button type="submit">Atualizar</Button>
        </FormContent>

        <ButtonOutline onClick={() => setModal(false)} type="button">
          Cancelar
        </ButtonOutline>
      </Content>
    </Container>
  );
}

export default Modal;
