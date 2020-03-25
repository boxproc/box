import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Events from './Events';

import {
  handleGetDictionaryEvents,
  selectDictionaryEvents,
  selectIsEventsLoading,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  eventsData: selectDictionaryEvents(state),
  isLoading: selectIsEventsLoading(state),
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
