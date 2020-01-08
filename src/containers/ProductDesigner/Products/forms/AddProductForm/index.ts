import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import { detailsInitialFormValues } from '../../consts';
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
    historyRetentionNumberOfDays: 90,
    ...detailsInitialFormValues,
  },
  currentProductType: formSelector(state, 'productType'),
  currentInstitution: formSelector(state, 'institutionId'),
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
