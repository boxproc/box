import { connect } from 'react-redux';

import HomePage from './HomePage';

import {
  selectUserName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  userName: selectUserName(state),
});

export default connect(
  mapStateToProps
)(HomePage);
