import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditSystemPropertyModal from './EditSystemPropertyModal';

import { StoreState } from 'store';

const dirty = isDirty(formNamesConst.ADD_SYSTEM_PROPERTY);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(EditSystemPropertyModal);
