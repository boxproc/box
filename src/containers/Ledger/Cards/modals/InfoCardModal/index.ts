import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import InfoCardModal from './InfoCardModal';

import { formNamesConst } from 'consts';
import {
  handleActivateLedgerCard,
  selectLedgerCardPanAlias,
  selectLedgerCardValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.LEDGER_CARDS);

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
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCardModal);
