import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PasswordForm from './PasswordForm';

import {
  handleUserGetAuthKey,
  isGettingAuthKeySelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isGettingAuthKeySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userGetAuthKey: handleUserGetAuthKey,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordForm);
