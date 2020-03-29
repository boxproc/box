import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';

import UsersGroupFields from './UsersGroupFields';

import {
  handleGetInstitutions,
  institutionsOptionsSelector,
  isGettingInstitutionsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isInstitutionsLoading: isGettingInstitutionsSelector(state),
  institutionsOptions: institutionsOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutions: handleGetInstitutions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroupFields);
