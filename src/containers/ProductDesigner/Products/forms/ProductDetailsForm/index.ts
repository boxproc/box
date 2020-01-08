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

import { formNamesConst } from 'consts';
import { formValueSelector } from 'redux-form';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.PRODUCT_DETAILS);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_PRODUCT_DETAILS,
  ProductsActionTypes.UPDATE_PRODUCT_DETAILS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectCurrentProductDetails(state),
  interestDistributionEditorValue: formSelector(state, 'interestDistributionType'),
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
