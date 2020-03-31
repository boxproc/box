import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddUsersGroupForm from './AddUsersGroupForm';

import {
  handleAddUsersGroup,
  isAddingUsersGroupSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingUsersGroupSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addUsersGroup: handleAddUsersGroup,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUsersGroupForm);
