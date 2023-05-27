import { createStore } from 'redux';

const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
    
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};


const initialState = {
  user: "null",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;