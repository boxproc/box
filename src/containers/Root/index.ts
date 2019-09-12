import { connect } from 'react-redux';

import Root from './Root';

import { selectIsLogout, selectVisibleUiItems } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItems: selectVisibleUiItems(state),
  isLogout: selectIsLogout(state),
});

export default connect(
  mapStateToProps
)(Root);
