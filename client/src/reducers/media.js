import { UPLOAD_SUCCESS, UPLOAD_FAIL, LOAD_SUCCESS, REFRESH_SUCCESS } from '../actions/types';

const initialState = {
  photo: '',
  displayUploadForm: true,
  isLoading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_SUCCESS:
      return { ...state, displayUploadForm: false };
      break;
    case UPLOAD_FAIL:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, photo: payload, isLoading: false };
    case REFRESH_SUCCESS:
      return {
        photo: '',
        displayUploadForm: true,
        isLoading: true,
      }
    default:
      return state;
  }
}
