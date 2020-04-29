import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CurrencyRateForm from './CurrencyRateForm';

import {
  currencyNumsOptionsSelector,
  isCurrenciesLoadingSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  institutionOptions: userInstitutionsOptionsSelector(state),
  isLoadingCurrencies: isCurrenciesLoadingSelector(state),
  currenciesOptions: currencyNumsOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addCurrencyRate: () => console.log('---'),
    updateCurrencyRate: () => console.log('---'),
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyRateForm);
