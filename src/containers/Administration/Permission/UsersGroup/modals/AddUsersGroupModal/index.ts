import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddUsersGroupModal from './AddUsersGroupModal';

import { closeModal } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADD_USER_GROUP);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUsersGroupModal);
