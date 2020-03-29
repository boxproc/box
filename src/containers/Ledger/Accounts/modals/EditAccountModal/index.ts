import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditAccountModal from './EditAccountModal';

import {
  selectLedgerCurrentAccount,
  selectLedgerCurrentAccountAlias,
  selectLedgerCurrentAccountAuxCounters,
  selectLedgerCurrentAccountProductType,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const dirty = isDirty(formNamesConst.ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentAccountAlias: selectLedgerCurrentAccountAlias(state),
  currentAccount: selectLedgerCurrentAccount(state),
  currentAccountAuxCounters: selectLedgerCurrentAccountAuxCounters(state),
  currentProductType: selectLedgerCurrentAccountProductType(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(EditAccountModal);
