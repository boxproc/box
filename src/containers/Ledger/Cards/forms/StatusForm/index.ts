import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatusForm from './StatusForm';

import {
  activeItemIdSelector,
  cardStatusesOptionsSelector,
  createLoadingSelector,
  handleChangeLedgerCardStatus,
  handleGetDictionaryCardStatuses,
  isLoadingCardStatusesSelector,
  LedgerCardsActionTypes,
  selectCurrentCardStatusOption,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.CHANGE_LEDGER_CARD_STATUS,
]);

const formSelector = formValueSelector(formNamesConst.CHANGE_CARD_STATUS);

const mapStateToProps = (state: StoreState) => ({
  isStatusesLoading: isLoadingCardStatusesSelector(state),
  isLoading: loadingSelector(state),
  cardStatusesOptions: cardStatusesOptionsSelector(state),
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
