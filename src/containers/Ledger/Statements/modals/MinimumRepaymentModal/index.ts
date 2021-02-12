import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import MinimumRepaymentModal from './MinimumRepaymentModal';

import {
  activeItemIdSelector,
  currentStatementSelector,
  handleChangeMinimumRepayment,
  isChangingMinimumRepaymentSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isChangingMinimumRepaymentSelector(state),
  outstandingBalance: currentStatementSelector(state).balanceClose,
  initialValues: {
    statementId: activeItemIdSelector(state),
    minimumRepayment: currentStatementSelector(state).repaymentMinimumAmount,
    repaymentDueDate: currentStatementSelector(state).repaymentDueDate,
  },
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    changeMinimumRepayment: handleChangeMinimumRepayment,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinimumRepaymentModal);
