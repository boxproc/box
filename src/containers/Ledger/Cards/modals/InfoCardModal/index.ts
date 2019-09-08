import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import InfoCardModal from './InfoCardModal';

import { formNames } from 'consts';
import {
  closeModal,
  handleActivateLedgerCard,
  selectLedgerCardPanAlias,
  selectLedgerCardValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.LEDGER_CARDS);

const mapStateToProps = (state: StoreState) => ({
    ledgerCurrentCard: selectLedgerCardValues(state),
    ledgerCardPanAlias : selectLedgerCardPanAlias(state),
    statusValue: formSelector(
      state,
      'status'
    ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    activateLedgerCard: handleActivateLedgerCard,
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCardModal);
