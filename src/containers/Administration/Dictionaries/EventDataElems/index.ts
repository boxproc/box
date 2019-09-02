import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import EventDataElems from './EventDataElems';

import {
  AdminEventDataElemsActionTypes,
  createLoadingSelector,
  handleFilterAdminEventDataElems,
  handleGetAdminEvents,
  selectAdminEventDataElemsItems,
  selectAdminEventsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEventDataElemsActionTypes.GET_ADMIN_EVENT_DATA_ELEMS,
  AdminEventDataElemsActionTypes.FILTER_ADMIN_EVENT_DATA_ELEMS,
]);

const dirty = isDirty(formNames.ADMIN_EVENT_DATA_ELEMS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFilterFormDirty: dirty(state),
  adminEventDataElemsItems: selectAdminEventDataElemsItems(state),
  adminEventsOptions: selectAdminEventsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminEvents: handleGetAdminEvents,
    filterAdminEventDataElems: handleFilterAdminEventDataElems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDataElems);
