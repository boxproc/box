import { connect } from 'react-redux';

import TransactionModal from './TransactionModal';

import { selectActiveItemId, selectPayloadLedgerTransactionModal } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentTransactionId: selectActiveItemId(state),
  payloadLedgerTransactionModal: selectPayloadLedgerTransactionModal(state),
});

export default connect(
  mapStateToProps
)(TransactionModal);
