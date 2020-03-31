import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatusForm from './StatusForm';

import {
  activeItemIdSelector,
  cardStatusesOptionsSelector,
  currentCardStatusOptionSelector,
  handleChangeCardStatus,
  handleGetDictionaryCardStatuses,
  isChangingCardStatusSelector,
  isLoadingCardStatusesSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.CHANGE_CARD_STATUS);

const mapStateToProps = (state: IStoreState) => ({
  isStatusesLoading: isLoadingCardStatusesSelector(state),
  isLoading: isChangingCardStatusSelector(state),
  cardStatusesOptions: cardStatusesOptionsSelector(state),
  initialValues: currentCardStatusOptionSelector(state),
  currentCardId: activeItemIdSelector(state),
  statusValue: formSelector(state, 'status'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryCardStatuses: handleGetDictionaryCardStatuses,
    changeCardStatus: handleChangeCardStatus,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusForm);
