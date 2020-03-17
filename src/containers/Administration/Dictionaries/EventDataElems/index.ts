import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElems from './EventDataElems';

import {
  createLoadingSelector,
  DictionaryEventDataElemsActionTypes,
  handleFilterDictionaryEventDataElems,
  handleGetDictionaryEvents,
  resetEventDataElems,
  selectDictionaryEventDataElemsItems,
  selectDictionaryEventsOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  DictionaryEventDataElemsActionTypes.FILTER_ADMIN_EVENT_DATA_ELEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  dictionaryEventDataElemsItems: selectDictionaryEventDataElemsItems(state),
  dictionaryEventsOptions: [
    { label: 'Select All', value: '' },
    ...selectDictionaryEventsOptions(state),
  ],
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryEvents: handleGetDictionaryEvents,
    filterDictionaryEventDataElems: handleFilterDictionaryEventDataElems,
    resetEventDataElems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDataElems);
