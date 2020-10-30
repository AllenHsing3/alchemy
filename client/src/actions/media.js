import { UPLOAD_SUCCESS, LOAD_FAIL, LOAD_SUCCESS, REFRESH_SUCCESS } from './types';
import axios from 'axios';


export const upload = (photo) => {
  return async (dispatch) => {
    try {
      // let res = await axios.post('/photo')
      const url =
        'https://slate.host/api/v1/upload-data/71624a53-f07b-45b7-8d89-70d7b6a2832a';
      let data = new FormData();
      data.append('data', photo);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: "Basic SLA8063279f-34a9-4eb9-98a2-9da84b6cf8b6TE"
        },
        body: data,
      });
      dispatch({
        type: UPLOAD_SUCCESS,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const loadPhoto = () => async (dispatch) => {
  try {
    const res = await axios.get('/photo')
    dispatch({
      type: LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_FAIL,
    });
  }
};

export const refresh = () => async(dispatch) => {
    try {
      dispatch({
        type: REFRESH_SUCCESS
      })
    } catch (err) {
      console.error(err.message)
    }
}
