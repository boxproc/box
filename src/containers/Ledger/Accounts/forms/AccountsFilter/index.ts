import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change, formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AccountsFilter from './AccountsFilter';

import {
  createLoadingSelector,
  handleGetInstitutionProducts,
  ProductsActionTypes,
  selectInstitutionProductsOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_INSTITUTION_PRODUCTS,
]);
const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  institutionValue: formSelector(state, 'institutionId'),
  accountAliasValue: formSelector(state, 'accountAlias'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutionProducts: handleGetInstitutionProducts,
    filterChange: change,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsFilter);
