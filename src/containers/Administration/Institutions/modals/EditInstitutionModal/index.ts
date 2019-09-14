import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInstitutionModal from './EditInstitutionModal';

import {
  closeModal,
  selectAdminCurrentInstitution,
  selectAdminCurrentInstitutionName,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADMIN_INSTITUTIONS);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  adminCurrentInstitution: selectAdminCurrentInstitution(state),
  adminCurrentInstitutionName: selectAdminCurrentInstitutionName(state),
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
)(EditInstitutionModal);
