import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddSystemPropertyModal from './AddSystemPropertyModal';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADD_ADMIN_SYSTEM_PROPERTY);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddSystemPropertyModal);
