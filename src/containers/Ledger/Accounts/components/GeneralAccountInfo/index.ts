import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import GeneralAccountInfo from './GeneralAccountInfo';

import {
  currentAccHasProductOverrideSelector,
  dictionaryAccountStatusesOptionsSelector,
  directDebitsMandatesOptionsSelector,
  handleGetDictionaryAccountStatuses,
  handleGetInstProducts,
  instProductsOptionsSelector,
  isGettingDirectDebitMandatesSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoadingMandates: isGettingDirectDebitMandatesSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  directDebitMandatesOptions: directDebitsMandatesOptionsSelector(state),
  hasProductOverride: currentAccHasProductOverrideSelector(state),
  institutionProductsOptions: instProductsOptionsSelector(state),
  statusesOptions: dictionaryAccountStatusesOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstProducts: handleGetInstProducts,
    getAccountStatuses: handleGetDictionaryAccountStatuses,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralAccountInfo);
