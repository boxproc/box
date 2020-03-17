import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditEndpointModal from './EditEndpointModal';

import {
  selectAdminCurrentEndpoint,
  selectAdminCurrentEndpointName,
  selectInstitutionsOptions,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.ENDPOINT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentEndpoint: selectAdminCurrentEndpoint(state),
  currentEndpointName: selectAdminCurrentEndpointName(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(EditEndpointModal);
