import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CodeForm from './CodeForm';

import {
  AuthActionTypes,
  createLoadingSelector,
  handleUserEnterAuthKey,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuthActionTypes.USER_ENTER_AUTH_KEY,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
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
