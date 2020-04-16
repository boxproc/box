import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CurrencyLimitForm from './CurrencyLimitForm';

import {
  currencyLimitLabelSelector,
  currencyLimitSelector,
  handleGetCurrencyLimit,
  handleUpdateCurrencyLimit,
  isGettingCurrencyLimitSelector,
  IStoreState,
  isUpdatingCurrencyLimitSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingCurrencyLimitSelector(state),
  isUpdating: isUpdatingCurrencyLimitSelector(state),
  currencyLimitLabel: currencyLimitLabelSelector(state),
  initialValues: currencyLimitSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getCurrencyLimit: handleGetCurrencyLimit,
    updateCurrencyLimit: handleUpdateCurrencyLimit,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyLimitForm);
