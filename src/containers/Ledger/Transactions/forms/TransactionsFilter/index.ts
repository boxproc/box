import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import TransactionsFilter from './TransactionsFilter';

import {
  createLoadingSelector,
  handleGetInstitutionProducts,
  IStoreState,
  ProductsActionTypes,
  selectInstitutionProductsOptions,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_INSTITUTION_PRODUCTS,
]);
const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: IStoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  institutionValue: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstitutionProducts: handleGetInstitutionProducts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsFilter);
