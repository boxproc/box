import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

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
const formSelector = formValueSelector(formNames.LEDGER_TRANSACTIONS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  initialValues: {
    institutionId: selectInstitutionsOptions(state)[0],
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
