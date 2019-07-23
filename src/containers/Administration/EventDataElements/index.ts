import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElements from './EventDataElements';

import {
  AdminEventDataElementsActionTypes,
  createLoadingSelector,
  handleGetAdminEventDataElements,
  selectAdminEventDataElementsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEventDataElementsActionTypes.GET_ADMIN_EVENT_DATA_ELEMENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminEventDataElementsItems: selectAdminEventDataElementsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminEventDataElements: handleGetAdminEventDataElements,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDataElements);
