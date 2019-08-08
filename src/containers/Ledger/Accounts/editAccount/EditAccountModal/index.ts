import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditAccountModal from './EditAccountModal';

import { closeModal, selectLedgerCurrentAccountAlias } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  ledgerCurrentAccountAlias: selectLedgerCurrentAccountAlias(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAccountModal);
