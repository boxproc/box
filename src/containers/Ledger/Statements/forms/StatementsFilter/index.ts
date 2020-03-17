import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatementsFilter from './StatementsFilter';

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
)(StatementsFilter);
