import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Header';

import {
  handleUserLogout,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userLogout: handleUserLogout,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Root);
