import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  handleGetUserInfo,
  selectIsRememberedMe,
  selectSessionId,
  selectUserName,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { stringsUtil } from 'utils';

const isLoggedIn = stringsUtil.getSessionStorage('isLoggedIn');

const mapStateToProps = (state: StoreState) => ({
  sessionId: selectSessionId(state),
  userName: selectUserName(state),
  isRememberedMe: selectIsRememberedMe(state),
  isLoggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUserInfo: handleGetUserInfo,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
