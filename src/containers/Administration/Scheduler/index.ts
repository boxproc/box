import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  createLoadingSelector,
  openModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
