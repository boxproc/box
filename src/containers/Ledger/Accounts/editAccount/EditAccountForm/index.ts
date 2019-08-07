import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditAccountForm from './EditAccountForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  createLoadingSelector,
} from 'store/domains';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAccountForm);
