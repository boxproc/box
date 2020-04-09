import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CurrencyLimitsTable from './CurrencyLimitsTable';

import {
  currencyLimitsSelector,
  handleGetCurrencyLimits,
  handleUpdateCurrencyLimit,
  isGettingCurrencyLimitsSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingCurrencyLimitsSelector(state),
  currencyLimits: currencyLimitsSelector(state),
  initialValues: currencyLimitsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getCurrencyLimits: handleGetCurrencyLimits,
    updateCurrencyLimit: handleUpdateCurrencyLimit,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyLimitsTable);
