import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditAccountModal from './EditAccountModal';

import {
  closeModal,
  selectInstitutionsOptions,
  selectLedgerCurrentAccount,
  selectLedgerCurrentAccountAlias,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  ledgerCurrentAccountAlias: selectLedgerCurrentAccountAlias(state),
  ledgerCurrentAccount: selectLedgerCurrentAccount(state),
  institutionsOptions: selectInstitutionsOptions(state),
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
