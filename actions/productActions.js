import { GET_PRODUCTS, SET_LOADING } from './types';
import axios from '../helpers/axios';

export const getProducts = () => async (dispatch) => {
  try {
    setLoading();
    let data = await axios.get('/products');
    dispatch({
      type: GET_PRODUCTS,
      payload: data.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
