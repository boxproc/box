import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditInstitutionModal from './EditInstitutionModal';

import {
  closeModal,
  selectAdminCurrentInstitution,
  selectAdminCurrentInstitutionName,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
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
