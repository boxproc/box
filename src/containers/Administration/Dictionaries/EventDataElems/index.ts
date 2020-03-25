import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElems from './EventDataElems';

import {
  handleFilterDictionaryEventDataElems,
  handleGetDictionaryEvents,
  resetEventDataElems,
  selectDictionaryEventDataElems,
  selectDictionaryEventsOptions,
  selectIsEventDataElemsLoading,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsData: selectDictionaryEventDataElems(state),
  eventsOptions: [
    { label: 'Select All', value: '' },
    ...selectDictionaryEventsOptions(state),
  ],
  isLoading: selectIsEventDataElemsLoading(state),
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
