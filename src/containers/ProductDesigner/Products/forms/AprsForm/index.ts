import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AprsForm from './AprsForm';

import {
  createLoadingSelector,
  handleAddProductApr,
  ProductAprsFeesRewardsActionTypes,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  ProductAprsFeesRewardsActionTypes.ADD_PRODUCT_APR,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addProductApr: handleAddProductApr,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AprsForm);
