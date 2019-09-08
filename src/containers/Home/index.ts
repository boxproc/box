import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from './Home';

import { openModal, selectIs2faRegistered, selectUserLastActivity } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  lastActivity: selectUserLastActivity(state),
  is2faRegistered: selectIs2faRegistered(state),
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
)(Home);
