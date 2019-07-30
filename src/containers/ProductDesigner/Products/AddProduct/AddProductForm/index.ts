import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import AddProductForm from './AddProductForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  handleAddProduct,
} from 'store/domains';

const formSelector = formValueSelector(formNames.ADD_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  initialValues: {
    historyRetentionNumberOfDay: 90,
  },
  productTypeValue: formSelector(
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
