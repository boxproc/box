import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Root';

import {
  handleGetUserInfo,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUserInfo: handleGetUserInfo,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Root);
