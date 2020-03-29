import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElems from './EventDataElems';

import {
  dictionaryEventDataElemsSelector,
  dictionaryEventsOptionsSelector,
  handleFilterDictionaryEventDataElems,
  handleGetDictionaryEvents,
  isEventDataElemsLoadingSelector,
  resetEventDataElems,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsData: dictionaryEventDataElemsSelector(state),
  eventsOptions: [
    { label: 'Select All', value: '' },
    ...dictionaryEventsOptionsSelector(state),
  ],
  isLoading: isEventDataElemsLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getEventsData: handleGetDictionaryEvents,
    filterEventDataElems: handleFilterDictionaryEventDataElems,
    resetEventDataElems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDataElems);
