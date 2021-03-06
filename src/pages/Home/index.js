// Dependencies
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/ducks/auth';
import api from '../../services/api';

// Images
import logo from '../../assets/logo-grey.svg';
import logout from '../../assets/logout.svg';
import user from '../../assets/user.svg';
import add from '../../assets/add.svg';
// components
import { showToast } from '../../components/Alert';

// Styles
import {
  Container,
  Header,
  ContentUsers,
  BlockUser,
  Total,
  Buttons,
  Button,
} from './styles';

function Home() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  async function getAllUsers() {
    const response = await api.get(`/api/users?page=${page}`);
    setUsers(response.data.data);
    setTotalUsers(response.data.total);
  }

  function logoutUser() {
    dispatch(userActions.login(null));
    history.push('/');
    showToast({
      type: 'success',
      message: 'Você saiu da sua conta com sucesso!',
    });
  }

  useEffect(() => {
    getAllUsers();
  }, [page]);

  return (
    <>
      <Header>
        <div className="container">
          <img src={logo} alt="" />

          <div>
            <button type="button" onClick={() => history.push('/addclient')}>
              <img src={add} alt="" />
              <p>Novo Cliente</p>
            </button>

            <button
              type="button"
              className="block-logout"
              onClick={() => logoutUser()}
            >
              <img src={logout} alt="" />
              <p>Sair</p>
            </button>
          </div>
        </div>
      </Header>

      <Container className="container">
        <h1>
          <img src={user} alt="" />
          Painel de Clientes
        </h1>

        {users && (
          <ContentUsers>
            {users.map((u) => (
              <BlockUser key={u.id}>
                <img src={u.avatar} alt="" />
                <p className="name">
                  {u.first_name} {u.last_name}
                </p>
                <p>{u.email}</p>

                <Button type="button">Editar</Button>
              </BlockUser>
            ))}
          </ContentUsers>
        )}

        <Total>
          <p>Total: {totalUsers} clientes</p>
        </Total>

        <Buttons>
          <Button type="button" onClick={() => setPage(page - 1)}>
            Anterior
          </Button>
          <Button type="button" onClick={() => setPage(page + 1)}>
            Próximo
          </Button>
        </Buttons>
      </Container>
    </>
  );
}

export default Home;
