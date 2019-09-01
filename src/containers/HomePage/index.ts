import { connect } from 'react-redux';

import HomePage from './HomePage';

import {
  selectLastActivity,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  lastActivity: selectLastActivity(state),
});

export default connect(
  mapStateToProps
)(HomePage);
