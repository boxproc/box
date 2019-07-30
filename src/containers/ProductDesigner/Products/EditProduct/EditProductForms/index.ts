import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import EditProductForms from './EditProductForms';

import {
  createLoadingSelector,
  handleDeleteProduct,
  ProductsActionTypes,
  selectCurrentProductId,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.EDIT_GENERAL_PRODUCT);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.DELETE_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  currentProductId: selectCurrentProductId(state),
  productTypeValue: formSelector(
    state,
    'productType'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteProduct: handleDeleteProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductForms);
