import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AccountStatements from './AccountStatements';

import {
  accountStatementsSelector,
  activeItemIdSelector,
  handleGetAccountStatements,
  handleGetStatementAprs,
  IsAccStatementsAprsLoadingSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  accountCurrentId: activeItemIdSelector(state),
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
