import _ from 'lodash';

export const getUsers = state =>
  Object.values(_.get(state, 'Users.data') || {});
export const getLoading = state => _.get(state, 'Users.loading');
export const getFailed = state => _.get(state, 'Users.failed');
