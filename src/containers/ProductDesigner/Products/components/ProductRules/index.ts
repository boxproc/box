import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRules from './ProductRules';

import {
  handleFilterDictionaryEventDataElemsById,
  handleGetProductAprsFeesRewards,
  selectEventDataElemsForRules,
  selectProductAprsForRules,
  selectProductFeesForRules,
  selectProductRewardsForRules,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  eventDataElemsItems: selectEventDataElemsForRules(state),
  productAprsItems: selectProductAprsForRules(state),
  productFeesItems: selectProductFeesForRules(state),
  productRewardsItems: selectProductRewardsForRules(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterDictionaryEventDataElemsById: handleFilterDictionaryEventDataElemsById,
    getProductAprsFeesRewards: handleGetProductAprsFeesRewards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
