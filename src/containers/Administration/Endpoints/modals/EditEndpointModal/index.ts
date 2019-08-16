import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditEndpointModal from './EditEndpointModal';

import {
  closeModal,
  selectAdminCurrentEndpoint,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  adminCurrentEndpoint: selectAdminCurrentEndpoint(state),
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
)(EditEndpointModal);
