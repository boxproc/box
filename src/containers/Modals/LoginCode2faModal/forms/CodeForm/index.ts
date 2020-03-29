import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CodeForm from './CodeForm';

import {
  handleUserEnterAuthKey,
  isEnteringAuthKeySelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
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
