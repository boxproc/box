import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Login from './Login';

import {
  createLoadingSelector,
  handleUserLogin,
  UserActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  UserActionTypes.USER_LOGIN,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userLogin: handleUserLogin,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
