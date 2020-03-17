import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddEndpointModal from './AddEndpointModal';

import { selectInstitutionsOptions, StoreState } from 'store';

const dirty = isDirty(formNamesConst.ENDPOINT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(AddEndpointModal);
