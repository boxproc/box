import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';

import GeneralUserGroupInfo from './GeneralUserGroupInfo';

import { handleGetAdminInstitutions, selectAdminInstitutionsOptions } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
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
