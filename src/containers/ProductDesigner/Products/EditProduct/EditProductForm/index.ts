import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import EditProductForm from './EditProductForm';

import {
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.EDIT_PRODUCT);

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  productTypeValue: formSelector(
    state,
    'productType'
  ),
});

export default connect(
  mapStateToProps
)(EditProductForm);
