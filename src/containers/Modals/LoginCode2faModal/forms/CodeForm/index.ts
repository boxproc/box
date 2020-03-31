import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CodeForm from './CodeForm';

import {
  handleUserEnterAuthKey,
  isEnteringAuthKeySelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isEnteringAuthKeySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userEnterAuthKey: handleUserEnterAuthKey,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeForm);
