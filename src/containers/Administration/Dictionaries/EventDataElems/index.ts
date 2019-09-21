import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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
  AdminEventDataElemsActionTypes.FILTER_ADMIN_EVENT_DATA_ELEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminEventDataElemsItems: selectAdminEventDataElemsItems(state),
  adminEventsOptions: [
    {
      label: 'Select All',
      value: '',
    },
    ...selectAdminEventsOptions(state),
  ],
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
