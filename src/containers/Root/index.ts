import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  handleGetUserInfo,
  selectIsLoggedIn,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: selectIsLoggedIn(state),
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
