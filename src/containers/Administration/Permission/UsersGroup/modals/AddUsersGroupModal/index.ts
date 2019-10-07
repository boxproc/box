import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddUsersGroupModal from './AddUsersGroupModal';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADD_USER_GROUP);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddUsersGroupModal);
