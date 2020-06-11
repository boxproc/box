import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AccountForm from './AccountForm';

import {
  activeItemIdSelector,
  handleAddAccount,
  handleGetDirectDebitMandates,
  handleUpdateAccount,
  instProductsSelector,
  isAddingAccountSelector,
  IStoreState,
  isUpdatingAccountSelector,
  resetDirectDebitMandates,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingAccountSelector(state) || isUpdatingAccountSelector(state),
  institutionProducts: instProductsSelector(state),
  currentAccountId: activeItemIdSelector(state),
  productValue: formSelector(state, 'product'),
  institutionValue: formSelector(state, 'institutionId'),
  repaymentMethodValue: formSelector(state, 'repaymentMethod'),
  customerIdValue: formSelector(state, 'customerId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAccount: handleUpdateAccount,
    addAccount: handleAddAccount,
    getDirectDebitMandates: handleGetDirectDebitMandates,
    resetDirectDebitMandates,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
