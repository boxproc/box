import { connect } from 'react-redux';

import RevolvingCreditIllustrationTables from './RevolvingCreditIllustrationTables';

import {
  IStoreState,
  revCreditAprsIllustrationSelector,
  revCreditStatementsIllustrationSelector,
  revCreditTransIllustrationSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  transactionsData: revCreditTransIllustrationSelector(state),
  aprsData: revCreditAprsIllustrationSelector(state),
  statementsData: revCreditStatementsIllustrationSelector(state),
});

export default connect(
  mapStateToProps
)(RevolvingCreditIllustrationTables);
