import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditEndpointModal from './EditEndpointModal';

import {
  currentEndpointNameSelector,
  currentEndpointSelector,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const dirty = isDirty(formNamesConst.ENDPOINT);

const mapStateToProps = (state: StoreState) => ({
  currentEndpoint: currentEndpointSelector(state),
  currentEndpointName: currentEndpointNameSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(EditEndpointModal);
