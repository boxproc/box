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
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.ACCOUNT);

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
