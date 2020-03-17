import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ChangePasswordModal from './ChangePasswordModal';

import { AuthActionTypes, createLoadingSelector, handleChangePassword, StoreState } from 'store';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.CHANGE_PASSWORD,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    changePassword: handleChangePassword,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordModal);
