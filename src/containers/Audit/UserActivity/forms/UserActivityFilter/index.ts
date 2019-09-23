import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import UserActivityFilter from './UserActivityFilter';

import {
  AuditUserActivityActionType,
  createLoadingSelector,
  handleGetAuditUsers,
  selectAuditUsers,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.FILTER);

const loadingSelector = createLoadingSelector([
  AuditUserActivityActionType.GET_AUDIT_USERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoadingUsers: loadingSelector(state),
  auditUsersOptions: selectAuditUsers(state),
  currentInstitution: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAuditUsers: handleGetAuditUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActivityFilter);
