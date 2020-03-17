import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddAccountModal from './AddAccountModal';

import { selectInstitutionsOptions, StoreState } from 'store';

const dirty = isDirty(formNamesConst.ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(AddAccountModal);
