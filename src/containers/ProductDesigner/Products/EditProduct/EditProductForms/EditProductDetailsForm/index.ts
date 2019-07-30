import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditProductDetailsForm from './EditProductDetailsForm';

import {
  createLoadingSelector,
//   ProductsActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductDetailsForm);
