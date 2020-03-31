import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import IllustrationRevolvingCredit from './RevolvingCreditIllustration';

import {
  handleIllustrateRevCredit,
  isRevCreditIllustrationLoadingSelector,
  IStoreState,
  resetProductIllustration,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isRevCreditIllustrationLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    illustrateRevolvingCreditProduct: handleIllustrateRevCredit,
    resetProductIllustration,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IllustrationRevolvingCredit);
