import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, LOAD_ITEMS_ERROR, LOADING_ITEMS, } from '../actions/types';

const INITIAL_STATE = {
  items: [],
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_ITEM:      
      return {
        ...state,
        items: state.items.concat(action.item)
      };
    case DELETE_ITEM:      
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.id)
      };
    case GET_ITEMS:      
      return {
        ...state, 
        items: action.items, 
        loading: false
      };
    case LOADING_ITEMS:      
      return {
        ...state,
        loading: true
      }
    case LOAD_ITEMS_ERROR:      
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  };
};