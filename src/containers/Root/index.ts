import { connect } from 'react-redux';

import { ReactCookieProps } from 'react-cookie';

import Root from './Root';

import {
  selectIsRememberedMe,
  selectSessionId,
  selectUserName,
  selectVisibleUiItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState, ownProps: ReactCookieProps) => ({
  visibleUiItems: selectVisibleUiItems(state),
  sessionId: selectSessionId(state),
  userName: selectUserName(state),
  isRememberedMe: selectIsRememberedMe(state),
  ownProps: ownProps.cookies,
});

export default connect(
  mapStateToProps
)(Root);
