import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddSystemPropertyModal from './AddSystemPropertyModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.ADD_SYSTEM_PROPERTY);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddSystemPropertyModal);
