import { createStore } from 'redux';

const initialState = {
  user: null,
  earnings: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_EARNINGS':
      return { ...state, earnings: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
