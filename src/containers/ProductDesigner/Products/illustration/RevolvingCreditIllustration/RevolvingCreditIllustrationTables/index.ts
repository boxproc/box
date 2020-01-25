import { connect } from 'react-redux';

import RevolvingCreditIllustrationTables from './RevolvingCreditIllustrationTables';

import {
  selectAprsIllustration,
  selectStatementsIllustration,
  selectTransactionsIllustration,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  transactionsData: selectTransactionsIllustration(state),
  aprsData: selectAprsIllustration(state),
  statementsData: selectStatementsIllustration(state),
});

export default connect(
  mapStateToProps
)(RevolvingCreditIllustrationTables);
