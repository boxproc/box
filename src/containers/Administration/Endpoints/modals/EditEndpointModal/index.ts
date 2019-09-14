import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditEndpointModal from './EditEndpointModal';

import {
  closeModal,
  selectAdminCurrentEndpoint,
  selectAdminCurrentEndpointName,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADMIN_ENDPOINT);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  adminCurrentEndpoint: selectAdminCurrentEndpoint(state),
  adminCurrentEndpointName: selectAdminCurrentEndpointName(state),
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
