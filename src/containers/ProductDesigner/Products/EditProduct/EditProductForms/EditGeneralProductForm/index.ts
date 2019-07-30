import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditGeneralProductForm from './EditGeneralProductForm';

import {
  createLoadingSelector,
  handleUpdateProduct,
  ProductsActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateProduct: handleUpdateProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGeneralProductForm);
