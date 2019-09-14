import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import InterfaceFilterForm from './InterfaceFilterForm';

import {
  handleFilterAdminInterface,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADMIN_INTERFACE_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAdminInterface: handleFilterAdminInterface,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceFilterForm);
