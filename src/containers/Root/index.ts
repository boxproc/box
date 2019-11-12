import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  AuthActionTypes,
  createLoadingSelector,
  selectIsRelogin,
  selectVisibleUiItems,
  setIsRelogin,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_LOGIN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  visibleUiItems: selectVisibleUiItems(state),
  isRelogin: selectIsRelogin(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setIsRelogin,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
