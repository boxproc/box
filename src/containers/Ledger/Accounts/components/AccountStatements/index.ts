import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AccountStatements from './AccountStatements';

import {
  accountStatementsSelector,
  handleGetAccountStatements,
  handleGetStatementAprs,
  IsAccStatementsAprsLoadingSelector,
  selectActiveItemId,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  accountCurrentId: selectActiveItemId(state),
  accountStatements: accountStatementsSelector(state),
  isLoading: IsAccStatementsAprsLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAccountStatements: handleGetAccountStatements,
    getStatementAprs: handleGetStatementAprs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountStatements);
