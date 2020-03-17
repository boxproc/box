import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Register2faModal from './Register2faModal';

import {
  handleSetUserCurrentRegisterStep,
  handleUserConfirmAuthKey,
  selectUserCode,
  selectUserCurrentRegisterStep,
  selectUserDataUrl,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentRegisterStep: selectUserCurrentRegisterStep(state),
  code: selectUserCode(state),
  dataUrl: selectUserDataUrl(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setUserCurrentRegisterStep: handleSetUserCurrentRegisterStep,
    userConfirmAuthKey: handleUserConfirmAuthKey,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register2faModal);
