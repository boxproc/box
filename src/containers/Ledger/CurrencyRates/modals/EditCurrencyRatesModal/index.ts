import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCurrencyRatesModal from './EditCurrencyRatesModal';

import {
  currentCurrencyRateSelector,
  IStoreState,
} from 'store';

const dirty = isDirty(formNamesConst.CURRENCY_RATES);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  currencyRate: currentCurrencyRateSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCurrencyRatesModal);
