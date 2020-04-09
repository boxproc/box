import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InstitutionForm from './InstitutionForm';

import {
  activeItemIdSelector,
  currencyNumsOptionsSelector,
  currentInstitutionNameSelector,
  handleAddInstitution,
  handleDeleteInstitution,
  handleGetDictionaryCurrencies,
  handleUpdateInstitution,
  isAddingInstitutionSelector,
  isCurrenciesLoadingSelector,
  isDeletingInstitutionSelector,
  IStoreState,
  isUpdatingInstitutionSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentInstitutionId: activeItemIdSelector(state),
  currentInstitutionName: currentInstitutionNameSelector(state),
  currenciesOptions: currencyNumsOptionsSelector(state),
  isCurrenciesLoading: isCurrenciesLoadingSelector(state),
  isLoading: isUpdatingInstitutionSelector(state)
    || isDeletingInstitutionSelector(state)
    || isAddingInstitutionSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addInstitution: handleAddInstitution,
    deleteInstitution: handleDeleteInstitution,
    getCurrencies: handleGetDictionaryCurrencies,
    updateInstitution: handleUpdateInstitution,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstitutionForm);
