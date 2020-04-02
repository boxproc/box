import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';
import StatementsFilter from './StatementsFilter';

import {
  handleGetInstProducts,
  instProductsOptionsSelector,
  isInstProductsLoadingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: IStoreState) => ({
  institutionProductsOptions: instProductsOptionsSelector(state),
  institutionValue: formSelector(state, 'institutionId'),
  isLoadingInstProducts: isInstProductsLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstProducts: handleGetInstProducts,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatementsFilter);
