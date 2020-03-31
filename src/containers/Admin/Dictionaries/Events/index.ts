import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Events from './Events';

import {
  dictionaryEventsSelector,
  handleGetDictionaryEvents,
  isEventsLoadingSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  eventsData: dictionaryEventsSelector(state),
  isLoading: isEventsLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getEventsData: handleGetDictionaryEvents,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
