import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SchedulerButtonsDropdown from './SchedulerButtonsDropdown';

import {
  handleSendAdminSchedulerAction,

} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    sendAdminSchedulerAction: handleSendAdminSchedulerAction,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(SchedulerButtonsDropdown);
