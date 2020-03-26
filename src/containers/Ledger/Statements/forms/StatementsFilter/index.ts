import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import StatementsFilter from './StatementsFilter';

import {
  handleGetInstitutionProducts,
  instProductsLoadingSelector,
  selectInstitutionProductsOptions,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  institutionProductsOptions: selectInstitutionProductsOptions(state),
  institutionValue: formSelector(state, 'institutionId'),
  isLoadingInstProducts: instProductsLoadingSelector(state),
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
