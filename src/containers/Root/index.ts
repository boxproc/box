import { connect } from 'react-redux';

import Root from './Root';

import {
  selectUserIsRememberedMe,
  selectUserName,
  selectUserSessionId,
  selectVisibleUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItems: selectVisibleUiItems(state),
  sessionId: selectUserSessionId(state),
  userName: selectUserName(state),
  isRememberedMe: selectUserIsRememberedMe(state),
});

export default connect(
  mapStateToProps
)(Root);
