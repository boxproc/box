import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditAccountModal from './EditAccountModal';

import {
  selectInstitutionsOptions,
  selectLedgerCurrentAccount,
  selectLedgerCurrentAccountAlias,
  selectLedgerCurrentAccountAuxCounters,
  selectLedgerCurrentAccountProductType,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentAccountAlias: selectLedgerCurrentAccountAlias(state),
  currentAccount: selectLedgerCurrentAccount(state),
  currentAccountAuxCounters: selectLedgerCurrentAccountAuxCounters(state),
  currentProductType: selectLedgerCurrentAccountProductType(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(EditAccountModal);
