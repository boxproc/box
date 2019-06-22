import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Page from './Page';

import {
  handleUserLogout,
  selectUserName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  userName: selectUserName(state),
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
