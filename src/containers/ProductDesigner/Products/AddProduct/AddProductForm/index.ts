import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import AddProductForm from './AddProductForm';

import {
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.ADD_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  productTypeValue: formSelector(
    state,
    'productType'
  ),
});

export default connect(
  mapStateToProps
)(AddProductForm);
