import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import { detailsInitialFormValues } from '../../consts';
import AddProductForm from './AddProductForm';

import {
  createLoadingSelector,
  handleAddProduct,
  IStoreState,
  ProductsActionTypes,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ADD_PRODUCT);

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.ADD_PRODUCT,
]);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: {
    historyRetentionNumberOfDays: 90,
    ...detailsInitialFormValues,
  },
  currentProductType: formSelector(state, 'productType'),
  currentInstitution: formSelector(state, 'institutionId'),
  interestDistributionValue: formSelector(state, 'interestDistributionType'),
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
