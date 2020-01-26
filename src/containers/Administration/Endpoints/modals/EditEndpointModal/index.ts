import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditEndpointModal from './EditEndpointModal';

import {
  selectAdminCurrentEndpoint,
  selectAdminCurrentEndpointName,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

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
