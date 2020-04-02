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
  handleGetInstProducts,
  instProductsOptionsSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: IStoreState) => ({
  institutionProductsOptions: instProductsOptionsSelector(state),
  hasProductOverride: currentAccHasProductOverrideSelector(state),
  statusesOptions: dictionaryAccountStatusesOptionsSelector(state),
  repaymentTypesOptions: dictionaryRepaymentTypesOptionsSelector(state),
  currentInstitution: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstProducts: handleGetInstProducts,
    getAccountStatuses: handleGetDictionaryAccountStatuses,
    getRepaymentTypes: handleGetDictionaryRepaymentTypes,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralAccountInfo);
