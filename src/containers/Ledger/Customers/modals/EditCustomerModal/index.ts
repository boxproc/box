import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCustomerModal from './EditCustomerModal';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.LEDGER_CUSTOMER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(EditCustomerModal);
