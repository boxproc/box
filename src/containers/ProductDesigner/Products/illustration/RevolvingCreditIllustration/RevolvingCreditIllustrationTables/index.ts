import { connect } from 'react-redux';

import RevolvingCreditIllustrationTables from './RevolvingCreditIllustrationTables';

import {
  selectAprsIllustration,
  selectStatementsIllustration,
  selectTransactionsIllustration,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  transactionsData: selectTransactionsIllustration(state),
  aprsData: selectAprsIllustration(state),
  statementsData: selectStatementsIllustration(state),
});

export default connect(
  mapStateToProps
)(RevolvingCreditIllustrationTables);
