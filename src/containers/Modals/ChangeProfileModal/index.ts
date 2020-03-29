import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ChangeProfileModal from './ChangeProfileModal';

import {
  handleChangeProfile,
  handleGetUsernames,
  isChangingProfileSelector,
  isLoadingUsernamesSelector,
  StoreState,
  usernamesOptionsSelector,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isChangingProfile: isChangingProfileSelector(state),
  isLoadingUsers: isLoadingUsernamesSelector(state),
  usernamesOptions: usernamesOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsernames: handleGetUsernames,
    changeProfile: handleChangeProfile,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeProfileModal);
