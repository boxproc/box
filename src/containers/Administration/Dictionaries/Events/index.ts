import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Events from './Events';

import {
  createLoadingSelector,
  DictionaryEventsActionTypes,
  handleGetDictionaryEvents,
  selectDictionaryEventsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  DictionaryEventsActionTypes.GET_DICTIONARY_EVENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  dictionaryEventsItems: selectDictionaryEventsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDictionaryEvents: handleGetDictionaryEvents,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
