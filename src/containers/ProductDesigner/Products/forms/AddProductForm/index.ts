import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import { detailsInitialFormValues } from './../../consts';
import AddProductForm from './AddProductForm';

import {
  handleAddProduct,
  isProductAddingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ADD_PRODUCT);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductAddingSelector(state),
  initialValues: {
    historyRetentionNumberOfDays: 90,
    ...detailsInitialFormValues,
  },
  currentProductType: formSelector(state, 'productType'),
  interestDistributionValue: formSelector(state, 'interestDistributionType'),
  statementCycleTypeValue: formSelector(state, 'statementCycleTypeId'),
  useStatementGracePeriodFlagValue: formSelector(state, 'useStatementGracePeriodFlag'),
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
