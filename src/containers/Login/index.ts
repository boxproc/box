import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { cookiesNames } from 'consts';

import Login from './Login';

import {
  AuthActionTypes,
  createLoadingSelector,
  handleUserLogin,
  selectIsMessageModal,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { cookiesUtil } from 'utils';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_LOGIN,
  AuthActionTypes.USER_ENTER_AUTH_KEY,
]);

const userName = cookiesUtil.get(cookiesNames.USER_NAME);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isMessageModal: selectIsMessageModal(state),
  isPasswordFocus: !!userName,
  initialValues: {
    rememberMe: !!userName,
    userName,
  },
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
