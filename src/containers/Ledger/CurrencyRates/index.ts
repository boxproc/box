import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CurrencyRates from './CurrencyRates';

import {
  currencyRatesSelector,
  handleFilterCurrencyRates,
  isLoadingCurrencyRatesSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingCurrencyRatesSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  currencyRatesData: currencyRatesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCurrencyRates: handleFilterCurrencyRates,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyRates);
