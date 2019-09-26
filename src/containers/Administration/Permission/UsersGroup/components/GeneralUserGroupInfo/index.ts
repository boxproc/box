import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';

import GeneralUserGroupInfo from './GeneralUserGroupInfo';

import {
  AdminInstitutionsActionTypes,
  createLoadingSelector,
  handleGetAdminInstitutions,
  selectAdminInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminInstitutionsActionTypes.GET_ADMIN_INSTITUTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isInstitutionsLoading: loadingSelector(state),
  institutionsOptions: selectAdminInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminInstitutions: handleGetAdminInstitutions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralUserGroupInfo);
