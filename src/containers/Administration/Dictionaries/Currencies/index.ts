import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Currencies from './Currencies';

import {
  AdminCurrenciesActionTypes,
  createLoadingSelector,
  handleGetAdminCurrencies,
  selectAdminCurrencies,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminCurrenciesActionTypes.GET_ADMIN_CURRENCIES,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminCurrencies: selectAdminCurrencies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminCurrencies: handleGetAdminCurrencies,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
