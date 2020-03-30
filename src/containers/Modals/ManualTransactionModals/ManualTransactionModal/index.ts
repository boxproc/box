import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  currencyNumsOptionsSelector,
  handleGetDictionaryCurrencies,
  handleMakeLimitAdjustment,
  handleMakeTransaction,
  isCurrenciesLoadingSelector,
  isLimitAdjustmentLoadingSelector,
  isManualTransactionLoading,
  manualTrModalIsLimitAdjSelector,
  payloadManualTrModalSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isLimitAdjustmentLoadingSelector(state) || isManualTransactionLoading(state),
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  modalPayload: payloadManualTrModalSelector(state),
  currenciesOptions: currencyNumsOptionsSelector(state),
  isLimitAdjustment: manualTrModalIsLimitAdjSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeTransaction: handleMakeTransaction,
    makeLimitAdjustment: handleMakeLimitAdjustment,
    getCurrencies: handleGetDictionaryCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
