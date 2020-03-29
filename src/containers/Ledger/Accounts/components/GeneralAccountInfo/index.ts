import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  dictionaryAccountStatusesOptionsSelector,
  dictionaryRepaymentTypesOptionsSelector,
  handleGetDictionaryAccountStatuses,
  handleGetDictionaryRepaymentTypes,
  handleGetInstitutionProducts,
  selectInstitutionProductsOptions,
  selectLedgerCurrentAccountHasProductOverride,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  hasProductOverride: selectLedgerCurrentAccountHasProductOverride(state),
  statusesOptions: dictionaryAccountStatusesOptionsSelector(state),
  repaymentTypesOptions: dictionaryRepaymentTypesOptionsSelector(state),
  currentInstitution: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutionProducts: handleGetInstitutionProducts,
    getAccountStatuses: handleGetDictionaryAccountStatuses,
    getRepaymentTypes: handleGetDictionaryRepaymentTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralAccountInfo);
