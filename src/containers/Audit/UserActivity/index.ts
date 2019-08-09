import { connect } from 'react-redux';

import UserActivities from './UserActivities';

import {
  selectAuditUserActivities, selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  auditUserActivities: selectAuditUserActivities(state),
});

export default connect(
  mapStateToProps
)(UserActivities);
