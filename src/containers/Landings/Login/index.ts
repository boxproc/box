import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import Login from './Login';

import { formNamesConst } from 'consts';

import {
  AuthActionTypes,
  createLoadingSelector,
  handleUserLogin,
  selectIsMessageModal,
  StoreState,
} from 'store';

import { storageUtil } from 'utils';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_LOGIN,
  AuthActionTypes.USER_ENTER_AUTH_KEY,
]);

const formSelector = formValueSelector(formNamesConst.USER_LOGIN);

const userName = storageUtil.getUserName();

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isMessageModal: selectIsMessageModal(state),
  isPasswordFocus: !!userName,
  initialValues: {
    rememberMe: !!userName,
    loginUsername: userName,
  },
  loginValues: formSelector(state, 'loginUsername', 'loginPassword'),
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
