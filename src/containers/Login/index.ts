import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { cookiesNames } from 'consts';

import Login from './Login';

import {
  handleUserLogin,
  selectIsMessageModal,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { cookiesUtil } from 'utils';

const username = cookiesUtil.getCookie(cookiesNames.USER_NAME);

const mapStateToProps = (state: StoreState) => ({
  isMessageModal: selectIsMessageModal(state),
  isPasswordFocus: !!username,
  initialValues: {
    rememberMe: !!username,
    username,
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
