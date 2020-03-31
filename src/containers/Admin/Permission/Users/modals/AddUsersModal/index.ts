import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddUserModal from './AddUserModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.USER);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddUserModal);
