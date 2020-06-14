import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElems from './EventDataElems';

import {
  dictionaryEventDataElemsSelector,
  dictionaryEventsOptionsSelector,
  handleFilterDictionaryEventDataElems,
  handleGetDictionaryEvents,
  isEventDataElemsLoadingSelector,
  IStoreState,
  resetEventDataElems,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  eventDataElemsData: dictionaryEventDataElemsSelector(state),
  eventsOptions: [
    { label: 'Select all', value: '' },
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
