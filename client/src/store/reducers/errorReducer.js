import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const INITIAL_STATE = {
  error: {
    msg: '', 
    status: null,
    id: null
  } 
}

export default function (state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case GET_ERRORS:
      return {
        ...state,
        error: {
          ...state.error,
          msg: payload.msg, 
          status: payload.status, 
          id: payload.id
        }
      };
    case CLEAR_ERRORS:
      return {
        ...state, 
        error: {
          msg: '',
          status: null, 
          id: null 
        }
      };
    default:
      return state;
  }
}