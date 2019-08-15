import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditInterfaceModal from './EditInterfaceModal';

import {
  closeModal,
  selectAdminCurrentInterface,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
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
