import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCustomerModal from './EditCustomerModal';

import { selectLedgerCurrentCustomerName } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.LEDGER_CUSTOMER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentCustomerName: selectLedgerCurrentCustomerName(state),
});

export default connect(
  mapStateToProps
)(EditCustomerModal);
