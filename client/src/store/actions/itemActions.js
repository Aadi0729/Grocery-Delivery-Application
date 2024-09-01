import axios from "axios";
import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  LOAD_ITEMS_ERROR,
  LOADING_ITEMS
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const addItem = item => (dispatch, getState) => {
  axios
    .post("/api/items", item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        item: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getItems = () => dispatch => {
  dispatch(loadItems());
  axios
    .get("/api/items")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        items: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const loadItems = () => {
  return {
    type: LOADING_ITEMS
  };
};

export const loadItemsError = () => {
  return {
    type: LOAD_ITEMS_ERROR
  };
};
