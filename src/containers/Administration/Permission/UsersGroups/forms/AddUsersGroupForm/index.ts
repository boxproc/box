import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddUsersGroupForm from './AddUsersGroupForm';

import {
  handleAddUsersGroup,
  isAddingUsersGroupSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
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
