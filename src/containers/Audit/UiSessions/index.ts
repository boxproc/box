import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiSessions from './UiSessions';

import {
  activeItemIdSelector,
  handleFilterUiSessions,
  handleFilterUsersActivityByData,
  IStoreState,
  isUiSessionsLoadingSelector,
  resetUiSessions,
  uiSessionsSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isUiSessionsLoadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  uiSessions: uiSessionsSelector(state),
  currentUserId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterUiSessions: handleFilterUiSessions,
    filterUsersActivity: handleFilterUsersActivityByData,
    resetUiSessions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiSessions);
