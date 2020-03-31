import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InstitutionForm from './InstitutionForm';

import {
  activeItemIdSelector,
  currentInstitutionNameSelector,
  handleAddInstitution,
  handleDeleteInstitution,
  handleUpdateInstitution,
  isAddingInstitutionSelector,
  isDeletingInstitutionSelector,
  IStoreState,
  isUpdatingInstitutionSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentInstitutionId: activeItemIdSelector(state),
  currentInstitutionName: currentInstitutionNameSelector(state),
  isLoading: isUpdatingInstitutionSelector(state)
    || isDeletingInstitutionSelector(state)
    || isAddingInstitutionSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addInstitution: handleAddInstitution,
    deleteInstitution: handleDeleteInstitution,
    updateInstitution: handleUpdateInstitution,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstitutionForm);
