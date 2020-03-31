import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AccountForm from './AccountForm';

import {
  dictionaryRepaymentTypesOptionsSelector,
  handleAddAccount,
  handleUpdateAccount,
  isAddingAccountSelector,
  IStoreState,
  isUpdatingAccountSelector,
  selectInstitutionProducts,
  userInstitutionsOptionsSelector,
} from 'store';

const formSelector = formValueSelector(formNamesConst.ACCOUNT);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingAccountSelector(state) || isUpdatingAccountSelector(state),
  institutionProducts: selectInstitutionProducts(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  repaymentTypesOptions: dictionaryRepaymentTypesOptionsSelector(state),
  currentProduct: formSelector(state, 'product'),
  currentInstitution: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAccount: handleUpdateAccount,
    addAccount: handleAddAccount,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
