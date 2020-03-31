import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ChangePasswordModal from './ChangePasswordModal';

import { handleChangePassword, isChangingPasswordSelector, IStoreState } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isChangingPasswordSelector(state),
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
