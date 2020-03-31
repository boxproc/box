import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import Login from './Login';

import { formNamesConst } from 'consts';

import {
  handleUserLogin,
  isEnteringAuthKeySelector,
  isLoggingInSelector,
  isMessageModalSelector,
  IStoreState,
} from 'store';

import { storageUtil } from 'utils';

const formSelector = formValueSelector(formNamesConst.USER_LOGIN);

const userName = storageUtil.getUserName();

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isEnteringAuthKeySelector(state) || isLoggingInSelector(state),
  isMessageModal: isMessageModalSelector(state),
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
