import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddUsersGroupModal from './AddUsersGroupModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.ADD_USERS_GROUP);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddUsersGroupModal);
