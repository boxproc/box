import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddCustomerModal from './AddCustomerModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.CUSTOMER);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddCustomerModal);
