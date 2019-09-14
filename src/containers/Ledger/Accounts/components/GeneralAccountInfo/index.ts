import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  createLoadingSelector,
  handleGetInstitutionProducts,
  ProductsActionTypes,
  selectInstitutionProductsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductsActionTypes.GET_INSTITUTION_PRODUCTS,
]);

const formSelector = formValueSelector(formNamesConst.LEDGER_ACCOUNT);

const mapStateToProps = (state: StoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionValue: formSelector(
    state,
    'institutionId'
  ),
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
)(GeneralAccountInfo);
