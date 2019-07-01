import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Root from './Header';

import {
  handleUserLogout,
  selectUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  uiItems: selectUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    userLogout: handleUserLogout,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
