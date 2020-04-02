import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';
import TransactionsFilter from './TransactionsFilter';

import {
  handleGetInstProducts,
  instProductsOptionsSelector,
  isInstProductsLoadingSelector,
  IStoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: IStoreState) => ({
  isLoadingInstProducts: isInstProductsLoadingSelector(state),
  institutionProductsOptions: instProductsOptionsSelector(state),
  institutionValue: formSelector(state, 'institutionId'),
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
)(TransactionsFilter);
