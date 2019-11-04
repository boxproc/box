import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  CycleEditorActionTypes,
  createLoadingSelector,
  handleGetCyclesDescriptions,
  handleGetInstitutionProducts,
  ProductsActionTypes,
  selectCyclesDescriptionsOptions,
  selectInstitutionProductsOptions,
  selectLedgerCurrentAccountHasProductOverride,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_INSTITUTION_PRODUCTS,
  CycleEditorActionTypes.GET_STATEMENTS_DESCRIPTIONS,
]);

const formSelector = formValueSelector(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  isLoadingInstitutionProducts: loadingSelector(state),
  isLoadingCyclesDescriptions: loadingSelector(state),
  cyclesDescriptionsOptions: selectCyclesDescriptionsOptions(state),
  hasProductOverride: selectLedgerCurrentAccountHasProductOverride(state),
  currentInstitution: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutionProducts: handleGetInstitutionProducts,
    getCyclesDescriptions: handleGetCyclesDescriptions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralAccountInfo);
