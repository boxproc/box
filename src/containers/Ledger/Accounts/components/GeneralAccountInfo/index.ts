import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  handleGetDictionaryAccountStatuses,
  handleGetDictionaryRepaymentTypes,
  handleGetInstitutionProducts,
  selectDictionaryAccountStatusesOptions,
  selectDictionaryRepaymentTypesOptions,
  selectInstitutionProductsOptions,
  selectLedgerCurrentAccountHasProductOverride,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  hasProductOverride: selectLedgerCurrentAccountHasProductOverride(state),
  statusesOptions: selectDictionaryAccountStatusesOptions(state),
  repaymentTypesOptions: selectDictionaryRepaymentTypesOptions(state),
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
