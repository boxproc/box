import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Statements from './Statements';

import {
  createLoadingSelector,
  handleFilterLedgerStatements,
  LedgerStatementsActionTypes,
  resetStatements,
  selectInstitutionsOptions,
  selectLedgerStatements,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerStatements: selectLedgerStatements(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerStatements: handleFilterLedgerStatements,
    resetStatements,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statements);
