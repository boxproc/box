import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GenerateCronExpressionModal from './GenerateCronExpressionModal';

import {
  closeModal,
  handleSetCronExpression,
  selectCronExpression,
  selectCurrentCronExpression,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentCronExpression: selectCurrentCronExpression(state),
  cronExpression: selectCronExpression(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    setCronExpression: handleSetCronExpression,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateCronExpressionModal);
