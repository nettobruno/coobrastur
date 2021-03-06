const initialState = {
  token: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
}

export function login(token) {
  return {
    type: 'LOGIN',
    payload: {
      token,
    },
  };
}
