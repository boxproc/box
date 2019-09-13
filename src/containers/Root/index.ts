import { connect } from 'react-redux';

import Root from './Root';

import { AuthActionTypes, createLoadingSelector, selectVisibleUiItems } from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_LOGIN,
  AuthActionTypes.USER_LOGOUT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  visibleUiItems: selectVisibleUiItems(state),
});

export default connect(
  mapStateToProps
)(Root);
