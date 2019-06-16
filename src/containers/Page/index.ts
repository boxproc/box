import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Page from './Page';

import {
  createLoadingSelector,
  handleUserLogout,
  selectUsername,
  UserActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  UserActionTypes.USER_LOGOUT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  userName: selectUsername(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userLogout: handleUserLogout,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
