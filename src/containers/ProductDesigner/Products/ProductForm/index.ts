import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import ProductForm from './ProductForm';

import {
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formselector = formValueSelector(formNames.PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  productTypeValue: formselector(
    state,
    'productType'
  ),
});

export default connect(
  mapStateToProps
)(ProductForm);
