import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatusForm from './StatusForm';

import {
  activeItemIdSelector,
  createLoadingSelector,
  DictionaryActionTypes,
  handleChangeLedgerCardStatus,
  handleGetDictionaryCardStatuses,
  LedgerCardsActionTypes,
  selectCardStatusesOptions,
  selectCurrentCardStatusOption,
  StoreState,
} from 'store';

const loadingStatusesSelector = createLoadingSelector([
  DictionaryActionTypes.GET_DICTIONARY_CARD_STATUSES,
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
  currentCardId: activeItemIdSelector(state),
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
