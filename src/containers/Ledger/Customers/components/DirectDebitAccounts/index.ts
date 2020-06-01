import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import DirectDebitAccounts from './DirectDebitAccounts';

import {
  handleAddDirectDebitAccount,
  isAddingDirectDebitAccountSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingDirectDebitAccountSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addDirectDebitAccount: handleAddDirectDebitAccount,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectDebitAccounts);
