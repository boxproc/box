import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatusForm from './StatusForm';

import {
  createLoadingSelector,
  DictionaryConstsActionTypes,
  handleChangeLedgerCardStatus,
  handleGetDictionaryCardStatuses,
  LedgerCardsActionTypes,
  selectActiveItemId,
  selectCardStatusesOptions,
  selectCurrentCardStatusOption,
  StoreState,
} from 'store';

const loadingStatusesSelector = createLoadingSelector([
  DictionaryConstsActionTypes.GET_DICTIONARY_CARD_STATUSES,
]);

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.CHANGE_LEDGER_CARD_STATUS,
]);

const formSelector = formValueSelector(formNamesConst.CHANGE_CARD_STATUS);

const mapStateToProps = (state: StoreState) => ({
  isStatusesLoading: loadingStatusesSelector(state),
  isLoading: loadingSelector(state),
  cardStatusesOptions: selectCardStatusesOptions(state),
  initialValues: selectCurrentCardStatusOption(state),
  currentCardId: selectActiveItemId(state),
  statusValue: formSelector(state, 'status'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryCardStatuses: handleGetDictionaryCardStatuses,
    changeCardStatus: handleChangeLedgerCardStatus,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusForm);
