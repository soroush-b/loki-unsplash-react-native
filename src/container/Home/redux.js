import client from '../../utils/client';
import _ from 'lodash';
export const GET_USERS = 'UNSPLASH/GET_USERS';
export const GET_USERS_SUCCESS = 'UNSPLASH/GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'UNSPLASH/GET_USERS_FAILED';

const initialState = {
  data: {},
  loading: false,
  failed: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: null,
        loading: true,
        failed: null,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: _.keyBy(action.payload, 'id'),
        failed: null,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        failed: action.payload,
      };
    default:
      return state;
  }
};

export const getUserSuccess = payload => ({type: GET_USERS_SUCCESS, payload});
export const getUserFailed = payload => ({type: GET_USERS_FAILED, payload});
export const getUserLoading = () => ({type: GET_USERS});
export const fetchUsers = name => async dispatch => {
  dispatch(getUserLoading());
  try {
    const {data} = await client.get(
      `search/users?page=1&per_page=30&query=${name}`,
    );
    dispatch(getUserSuccess(data.results));
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};
