import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  currentAccHasProductOverrideSelector,
  dictionaryAccountStatusesOptionsSelector,
  dictionaryRepaymentTypesOptionsSelector,
  handleGetDictionaryAccountStatuses,
  handleGetDictionaryRepaymentTypes,
  handleGetInstitutionProducts,
  IStoreState,
  selectInstitutionProductsOptions,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: IStoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  hasProductOverride: currentAccHasProductOverrideSelector(state),
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
