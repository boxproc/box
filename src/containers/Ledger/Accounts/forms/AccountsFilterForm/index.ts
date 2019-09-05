import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, isDirty } from 'redux-form';

import { formNames } from 'consts';

import AccountsFilterForm from './AccountsFilterForm';

import {
  createLoadingSelector,
  handleFilterLedgerAccounts,
  handleGetInstitutionProducts,
  ProductsActionTypes,
  selectInstitutionProductsOptions,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_INSTITUTION_PRODUCTS,
]);
const formSelector = formValueSelector(formNames.LEDGER_ACCOUNTS_FILTER);
const dirty = isDirty(formNames.LEDGER_ACCOUNTS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  isDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  initialValues: {
    institutionId: selectInstitutionsOptions(state)[0],
  },
  institutionValue: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerAccounts: handleFilterLedgerAccounts,
    getInstitutionProducts: handleGetInstitutionProducts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsFilterForm);
