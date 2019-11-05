import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRules from './ProductRules';

import {
  handleFilterDictionaryEventDataElemsById,
  handleGetProductAprs,
  handleGetProductFees,
  selectEventDataElemsForRules,
  selectProductAprsForRules,
  selectProductFeesForRules,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsItems: selectEventDataElemsForRules(state),
  productAprsItems: selectProductAprsForRules(state),
  productFeesItems: selectProductFeesForRules(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterDictionaryEventDataElemsById: handleFilterDictionaryEventDataElemsById,
    getProductAprs: handleGetProductAprs,
    getProductFees: handleGetProductFees,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
