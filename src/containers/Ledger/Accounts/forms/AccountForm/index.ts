import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AccountForm from './AccountForm';

import {
  createLoadingSelector,
  dictionaryRepaymentTypesOptionsSelector,
  handleAddLedgerAccount,
  handleUpdateLedgerAccount,
  LedgerAccountsActionTypes,
  selectInstitutionProducts,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.UPDATE_LEDGER_ACCOUNT,
  LedgerAccountsActionTypes.ADD_LEDGER_ACCOUNT,
]);

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionProducts: selectInstitutionProducts(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  repaymentTypesOptions: dictionaryRepaymentTypesOptionsSelector(state),
  currentProduct: formSelector(state, 'product'),
  currentInstitution: formSelector(state, 'institutionId'),
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
