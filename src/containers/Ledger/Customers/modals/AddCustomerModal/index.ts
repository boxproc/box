import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddCustomerModal from './AddCustomerModal';

import { StoreState } from 'store';

const dirty = isDirty(formNamesConst.CUSTOMER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddCustomerModal);
