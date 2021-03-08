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
import Modal from '../../components/Modal';

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
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalPages, setTotalPages] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  async function getAllUsers() {
    const response = await api.get(`/api/users?page=${page}`);
    setUsers(response.data.data);
    setTotalUsers(response.data.per_page);
    setTotalPages(response.data.total_pages);
  }

  async function getSingleUser(id) {
    const response = await api.get(`/api/users/${id}`);
    setSingleUser(response.data.data);
  }

  function logoutUser() {
    dispatch(userActions.login(null));
    history.push('/');
    showToast({
      type: 'success',
      message: 'Você saiu da sua conta com sucesso!',
    });
  }

  function nextPage() {
    setPage(page + 1);

    if (page >= totalPages) {
      setPage(totalPages);
    }
  }

  function backPage() {
    setPage(page - 1);

    if (page < 1) {
      setPage(page + 1);
    }
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
            <button
              type="button"
              className="add"
              onClick={() => history.push('/addclient')}
            >
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
        <Modal setModal={setModal} modal={modal} singleUser={singleUser} />

        <h1>
          <img src={user} alt="" />
          Painel de Clientes
        </h1>

        {users && (
          <ContentUsers>
            {users.map((u) => (
              <BlockUser key={u.id}>
                <img src={u.avatar} alt="User avatar" />
                <p className="name">
                  {u.first_name} {u.last_name}
                </p>
                <p>{u.email}</p>

                <Button
                  type="button"
                  onClick={() => {
                    getSingleUser(u.id);
                    setModal(true);
                  }}
                >
                  Editar
                </Button>
              </BlockUser>
            ))}
          </ContentUsers>
        )}

        <Total>
          <p>Total: {totalUsers} clientes</p>
        </Total>

        <Buttons>
          <Button type="button" onClick={() => backPage()}>
            Anterior
          </Button>
          <Button type="button" onClick={() => nextPage()}>
            Próximo
          </Button>
        </Buttons>
      </Container>
    </>
  );
}

export default Home;
