export function userReducer(state, action) {

  switch (action.type) {
    case 'login':
      return { ...state, user: { name: action.payload || 'Usuário' } };
    default:
      return state;
  }
}
