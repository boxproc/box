import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import GenerateCronExpressionModal from './GenerateCronExpressionModal';

import {
  handleSetGeneratedCronExpression,
  selectCurrentCronExpression,
  selectGeneratedCronExpression,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentCronExpression: selectCurrentCronExpression(state),
  generatedCronExpression: selectGeneratedCronExpression(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setGeneratedCronExpression: handleSetGeneratedCronExpression,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateCronExpressionModal);
