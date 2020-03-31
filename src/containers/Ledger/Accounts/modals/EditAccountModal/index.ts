import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditAccountModal from './EditAccountModal';

import {
  currentAccAliasSelector,
  currentAccAuxCountersSelector,
  currentAccProductTypeSelector,
  currentAccSelector,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const dirty = isDirty(formNamesConst.ACCOUNT);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  currentAccAlias: currentAccAliasSelector(state),
  currentAcc: currentAccSelector(state),
  currentAccAuxCounters: currentAccAuxCountersSelector(state),
  currentProductType: currentAccProductTypeSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(EditAccountModal);
