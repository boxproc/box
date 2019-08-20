import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

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

const dirty = isDirty(formNames.PRODUCT_DETAILS);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isDirty: dirty(state),
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
