import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change, formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import AccountsFilter from './AccountsFilter';

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
  accountAliasValue: formSelector(state, 'accountAlias'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getInstProducts: handleGetInstProducts,
    filterChange: change,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsFilter);
