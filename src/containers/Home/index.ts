import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from './Home';

import {
  openModal,
  selectUserFirstName,
  selectUserLastActivity,
  selectUserLastName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  lastActivity: selectUserLastActivity(state),
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
