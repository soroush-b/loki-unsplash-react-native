export const GET_QUE_LIST = 'QueList/GET_QUE_LIST';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getQueList = data => ({type: GET_QUE_LIST, data});
