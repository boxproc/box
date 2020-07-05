import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditEndpointModal from './EditEndpointModal';

import {
  currentEndpointNameSelector,
  currentEndpointSelector,
  IStoreState,
} from 'store';

const dirty = isDirty(formNamesConst.ENDPOINT);

const mapStateToProps = (state: IStoreState) => ({
  currentEndpoint: currentEndpointSelector(state),
  currentEndpointName: currentEndpointNameSelector(state),
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(EditEndpointModal);
