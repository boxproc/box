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
  selectActiveItemId,
  selectCardStatusesOptions,
  selectCurrentCardStatusOption,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  DictionaryCardStatusesActionTypes.GET_DICTIONARY_CARD_STATUSES,
]);

const formSelector = formValueSelector(formNamesConst.LEDGER_CHANGE_CARD_STATUS);

const mapStateToProps = (state: StoreState) => ({
  isStatusesLoading: loadingSelector(state),
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
