import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import LastStatement from './LastStatement';

import {
  createLoadingSelector,
  handleGetLedgerLastStatement,
  LedgerAccountsActionTypes,
  selectLedgerAccountCurrentId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.GET_LEDGER_LAST_STATEMENT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accountCurrentId: selectLedgerAccountCurrentId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerLastStatement: handleGetLedgerLastStatement,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LastStatement);
