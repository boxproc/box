import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInterfaceModal from './EditInterfaceModal';

import {
  closeModal,
  selectAdminCurrentInterface,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADMIN_INTERFACE);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  adminCurrentInterface: selectAdminCurrentInterface(state),
  institutionsOptions: selectInstitutionsOptions(state),
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
)(EditInterfaceModal);
