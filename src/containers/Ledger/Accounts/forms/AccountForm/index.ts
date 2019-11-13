import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AccountForm from './AccountForm';

import { StoreState } from 'store/StoreState';

import {
  createLoadingSelector,
  handleAddLedgerAccount,
  handleUpdateLedgerAccount,
  LedgerAccountsActionTypes,
  selectCyclesDescriptionsOptions,
  selectInstitutionProducts,
  selectLedgerCurrentAccountProductType,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.UPDATE_LEDGER_ACCOUNT,
  LedgerAccountsActionTypes.ADD_LEDGER_ACCOUNT,
]);

const formSelector = formValueSelector(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accountProductType: selectLedgerCurrentAccountProductType(state),
  institutionProducts: selectInstitutionProducts(state),
  cyclesDescriptionsOptions: selectCyclesDescriptionsOptions(state),
  currentProduct: formSelector(
    state,
    'product'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateLedgerAccount: handleUpdateLedgerAccount,
    addLedgerAccount: handleAddLedgerAccount,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
