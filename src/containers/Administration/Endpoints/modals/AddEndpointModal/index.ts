import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddEndpointModal from './AddEndpointModal';

import { StoreState, userInstitutionsOptionsSelector } from 'store';

const dirty = isDirty(formNamesConst.ENDPOINT);

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddEndpointModal);
