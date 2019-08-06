import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductDetailsForm from './ProductDetailsForm';

import {
  createLoadingSelector,
  handleGetProductDetails,
  handleUpdateProductDetails,
  ProductsActionTypes,
  selectCurrentProductDetails,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_DETAILS,
  ProductsActionTypes.UPDATE_PRODUCT_DETAILS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectCurrentProductDetails(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProductDetails: handleGetProductDetails,
    updateProductDetails: handleUpdateProductDetails,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsForm);
