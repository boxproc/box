import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import AddSystemPropertyModal from './AddSystemPropertyModal';

import {
  closeModal,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNames.ADD_ADMIN_SYSTEM_PROPERTY);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
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
)(AddSystemPropertyModal);
