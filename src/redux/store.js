import {createStore} from 'redux';

const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADER':
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
