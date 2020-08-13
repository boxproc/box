import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralProductForm from './GeneralProductForm';

import {
  currentProductNameSelector,
  currentProductSelector,
  handleDeleteProduct,
  handleGetProduct,
  handleUpdateProduct,
  isProductDeletingSelector,
  isProductLoadingSelector,
  isProductUpdatingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.GENERAL_PRODUCT);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductLoadingSelector(state),
  isUpdatingOrDeleting: isProductDeletingSelector(state) || isProductUpdatingSelector(state),
  initialValues: currentProductSelector(state),
  currentProductName: currentProductNameSelector(state),
  statementCycleTypeValue: formSelector(state, 'statementCycleTypeId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getProduct: handleGetProduct,
    deleteProduct: handleDeleteProduct,
    updateProduct: handleUpdateProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralProductForm);
