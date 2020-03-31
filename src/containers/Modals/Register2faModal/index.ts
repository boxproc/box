import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Register2faModal from './Register2faModal';

import {
  handleSetUserCurrentRegisterStep,
  handleUserConfirmAuthKey,
  IStoreState,
  userAuthCodeSelector,
  userCurrentRegisterStepSelector,
  userDataUrlSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentRegisterStep: userCurrentRegisterStepSelector(state),
  code: userAuthCodeSelector(state),
  dataUrl: userDataUrlSelector(state),
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
