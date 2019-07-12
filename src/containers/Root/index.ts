import { connect } from 'react-redux';

import Root from './Root';

import {
  selectIsRememberedMe,
  selectSessionId,
  selectUserName,
  selectVisibleUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItems: selectVisibleUiItems(state),
  sessionId: selectSessionId(state),
  userName: selectUserName(state),
  isRememberedMe: selectIsRememberedMe(state),
});

export default connect(
  mapStateToProps
)(Root);
