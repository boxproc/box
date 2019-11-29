import { connect } from 'react-redux';

import ManualTransactionModal from './ManualTransactionModal';

import { selectLedgerManualTransaction } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  ledgerManualTransaction: selectLedgerManualTransaction(state),
});

export default connect(
  mapStateToProps
)(ManualTransactionModal);
