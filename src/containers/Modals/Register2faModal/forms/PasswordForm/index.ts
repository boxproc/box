import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import PasswordForm from './PasswordForm';

import {
  AuthActionTypes,
  createLoadingSelector,
  handleUserGetAuthKey,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_GET_AUTH_KEY,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
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
