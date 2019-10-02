import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatusForm from './StatusForm';

import {
  createLoadingSelector,
  DictionaryCardStatusesActionTypes,
  handleChangeLedgerCardStatus,
  handleGetDictionaryCardStatuses,
  LedgerCardsActionTypes,
  selectActiveItemId,
  selectCardStatusesOptions,
  selectCurrentCardStatusOption,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingStatusesSelector = createLoadingSelector([
  DictionaryCardStatusesActionTypes.GET_DICTIONARY_CARD_STATUSES,
]);

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.CHANGE_LEDGER_CARD_STATUS,
]);

const formSelector = formValueSelector(formNamesConst.LEDGER_CHANGE_CARD_STATUS);

const mapStateToProps = (state: StoreState) => ({
  isStatusesLoading: loadingStatusesSelector(state),
  isLoading: loadingSelector(state),
  cardStatusesOptions: selectCardStatusesOptions(state),
  initialValues: selectCurrentCardStatusOption(state),
  currentCardId: selectActiveItemId(state),
  statusValue: formSelector(
    state,
    'status'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryCardStatuses: handleGetDictionaryCardStatuses,
    changeLedgerCardStatus: handleChangeLedgerCardStatus,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusForm);
