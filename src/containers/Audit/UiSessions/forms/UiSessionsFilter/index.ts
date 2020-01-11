import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiSessionsFilter from './UiSessionsFilter';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiSessionsFilter);
