import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUsersGroupFrom from './EditUsersGroupFrom';

import {
  currentUsersGroupSelector,
  handleUpdateUsersGroup,
  IStoreState,
  isUpdatingUsersGroupSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
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
