import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Login from './Login';

import {
  handleUserLogin,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userLogin: handleUserLogin,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Login);
