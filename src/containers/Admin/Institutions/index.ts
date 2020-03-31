import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Accounts from './Institutions';

import {
  activeItemIdSelector,
  currentInstitutionNameSelector,
  handleDeleteInstitution,
  handleGetInstitutions,
  institutionsSelector,
  isDeletingInstitutionSelector,
  isGettingInstitutionsSelector,
  isReadOnlySelector,
  IStoreState,
  resetInstitutions,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingInstitutionsSelector(state)
    || isDeletingInstitutionSelector(state),
  institutionsData: institutionsSelector(state),
  currentInstitutionName: currentInstitutionNameSelector(state),
  currentInstitutionId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutions: handleGetInstitutions,
    deleteInstitution: handleDeleteInstitution,
    resetInstitutions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
