import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatementsFilterForm from './StatementsFilterForm';

import {
  createLoadingSelector,
  handleFilterLedgerStatements,
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
const formSelector = formValueSelector(formNamesConst.LEDGER_STATEMENTS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  initialValues: {
    institutionId: selectInstitutionsOptions(state)[0],
    dateFrom: dateUtil.yesterday,
    dateTo: dateUtil.today,
  },
  institutionValue: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerStatements: handleFilterLedgerStatements,
    getInstitutionProducts: handleGetInstitutionProducts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementsFilterForm);
