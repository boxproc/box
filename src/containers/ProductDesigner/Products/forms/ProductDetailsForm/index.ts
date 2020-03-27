import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ProductDetailsForm from './ProductDetailsForm';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleGetProductDetails,
  handleUpdateProductDetails,
  ProductsActionTypes,
  selectCurrentProductDetails,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.PRODUCT_DETAILS);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_DETAILS,
]);

const loadingSelectorUpdate = createLoadingSelector([
  ProductsActionTypes.UPDATE_PRODUCT_DETAILS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isUpdating: loadingSelectorUpdate(state),
  initialValues: selectCurrentProductDetails(state),
  currentProductId: activeItemIdSelector(state),
  interestDistributionValue: formSelector(state, 'interestDistributionType'),
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
