import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Events from './Events';

import {
  AdminEventsActionTypes,
  createLoadingSelector,
  handleGetAdminEvents,
  selectAdminEventsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEventsActionTypes.GET_ADMIN_EVENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminEventsItems: selectAdminEventsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminEvents: handleGetAdminEvents,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
