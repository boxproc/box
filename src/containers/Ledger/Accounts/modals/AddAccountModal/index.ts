import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddAccountModal from './AddAccountModal';

import { IStoreState, userInstitutionsOptionsSelector } from 'store';

const dirty = isDirty(formNamesConst.ACCOUNT);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(AddAccountModal);
