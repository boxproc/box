import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditSystemPropertyModal from './EditSystemPropertyModal';

import {
    AdminSysPropsActionTypes,
    createLoadingSelector,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADD_SYSTEM_PROPERTY);

const loadingSelector = createLoadingSelector([
    AdminSysPropsActionTypes.UPDATE_ADMIN_SYS_PROPS,
  ]);

const mapStateToProps = (state: StoreState) => ({
    isLoading: loadingSelector(state),
    isFormDirty: dirty(state),
  });

export default connect(
  mapStateToProps
)(EditSystemPropertyModal);
