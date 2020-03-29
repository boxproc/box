import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUsersGroupFrom from './EditUsersGroupFrom';

import {
  currentUsersGroupSelector,
  handleUpdateUsersGroup,
  isUpdatingUsersGroupSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isUpdatingUsersGroupSelector(state),
  initialValues: currentUsersGroupSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateUsersGroup: handleUpdateUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupFrom);
