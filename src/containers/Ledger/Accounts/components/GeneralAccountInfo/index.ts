import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  handleGetInstitutionProducts,
  selectCyclesDescriptionsOptions,
  selectInstitutionProductsOptions,
  selectLedgerCurrentAccountHasProductOverride,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
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
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralAccountInfo);
