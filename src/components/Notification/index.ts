import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Notification from './Notification';

import {
  hideNotification,
  selectIsNotification,
  selectNotificationMessage,
} from 'store/domains';

import {
  StoreState,
} from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  isNotification: selectIsNotification(state),
  notificationMessage: selectNotificationMessage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    hideNotification,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
