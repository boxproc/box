import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import TransactionsFilterForm from './TransactionsFilterForm';

import {
  createLoadingSelector,
  handleFilterLedgerTransactions,
  handleGetInstitutionProducts,
  ProductsActionTypes,
  selectInstitutionProductsOptions,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

import { dateUtil } from 'utils';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_INSTITUTION_PRODUCTS,
]);
const formSelector = formValueSelector(formNamesConst.LEDGER_TRANSACTIONS_FILTER);
const dirty = isDirty(formNamesConst.LEDGER_TRANSACTIONS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  isDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  initialValues: {
    datetimeFrom: dateUtil.yesterday,
    datetimeTo: dateUtil.today,
  },
  institutionValue: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerTransactions: handleFilterLedgerTransactions,
    getInstitutionProducts: handleGetInstitutionProducts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsFilterForm);
