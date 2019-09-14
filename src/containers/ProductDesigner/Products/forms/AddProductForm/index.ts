import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AddProductForm from './AddProductForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  createLoadingSelector,
  handleAddProduct,
  ProductsActionTypes,
} from 'store/domains';

const formSelector = formValueSelector(formNamesConst.ADD_PRODUCT);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.ADD_PRODUCT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: {
    historyRetentionNumberOfDay: 90,
  },
  currentProductType: formSelector(
    state,
    'productType'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addProduct: handleAddProduct,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);
