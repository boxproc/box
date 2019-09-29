import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Root from './Root';

import { AuthActionTypes, createLoadingSelector, selectVisibleUiItems } from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_LOGIN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  visibleUiItems: selectVisibleUiItems(state),
});

export default withRouter(connect(
  mapStateToProps
)(Root));
