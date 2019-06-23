import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  handleGetUserInfo,
  handleUserLogout,
  selectIsRememberedMe,
  selectUserName,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  userName: selectUserName(state),
  isRememberedMe: selectIsRememberedMe(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUserInfo: handleGetUserInfo,
    userLogout: handleUserLogout,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
