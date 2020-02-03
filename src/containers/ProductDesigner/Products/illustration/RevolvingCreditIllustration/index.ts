import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import IllustrationRevolvingCredit from './RevolvingCreditIllustration';

import {
  createLoadingSelector,
  handleIllustrateRevolvingCreditProduct,
  ProductIllustrationActionTypes,
  resetProductIllustration,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  ProductIllustrationActionTypes.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateRevolvingCreditProduct: handleIllustrateRevolvingCreditProduct,
    resetProductIllustration,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IllustrationRevolvingCredit);
