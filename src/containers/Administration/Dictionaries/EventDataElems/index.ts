import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EventDataElems from './EventDataElems';

import {
  DictionaryEventDataElemsActionTypes,
  createLoadingSelector,
  handleFilterDictionaryEventDataElems,
  handleGetDictionaryEvents,
  selectDictionaryEventDataElemsItems,
  selectDictionaryEventsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  DictionaryEventDataElemsActionTypes.FILTER_ADMIN_EVENT_DATA_ELEMS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  dictionaryEventDataElemsItems: selectDictionaryEventDataElemsItems(state),
  dictionaryEventsOptions: [
    {
      label: 'Select All',
      value: '',
    },
    ...selectDictionaryEventsOptions(state),
  ],
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryEvents: handleGetDictionaryEvents,
    filterDictionaryEventDataElems: handleFilterDictionaryEventDataElems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDataElems);
