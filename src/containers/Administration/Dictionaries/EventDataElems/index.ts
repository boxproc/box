import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElems from './EventDataElems';

import {
  AdminEventDataElemsActionTypes,
  createLoadingSelector,
  handleFilterAdminEventDataElems,
  handleGetAdminEventDataElems,
  handleGetAdminEvents,
  selectAdminEventDataElemsItems,
  selectAdminEventsOptions,
  selectFilterAdminEventDataElemsParams,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEventDataElemsActionTypes.GET_ADMIN_EVENT_DATA_ELEMS,
  AdminEventDataElemsActionTypes.FILTER_ADMIN_EVENT_DATA_ELEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminEventDataElemsItems: selectAdminEventDataElemsItems(state),
  adminEventsOptions: selectAdminEventsOptions(state),
  filterAdminEventDataElemsParams: selectFilterAdminEventDataElemsParams(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminEventDataElems: handleGetAdminEventDataElems,
    getAdminEvents: handleGetAdminEvents,
    filterAdminEventDataElems: handleFilterAdminEventDataElems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDataElems);
