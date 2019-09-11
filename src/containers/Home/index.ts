import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from './Home';

import {
  openModal,
  selectIs2faRegistrationPending,
  selectUserFirstName,
  selectUserLastActivity,
  selectUserLastName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  lastActivity: selectUserLastActivity(state),
  is2faRegistrationPending: selectIs2faRegistrationPending(state),
  firstName: selectUserFirstName(state),
  lastName: selectUserLastName(state),
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
