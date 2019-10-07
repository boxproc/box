import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change, formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import GenerateCronExpressionModal from './GenerateCronExpressionModal';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNamesConst.DEFINE_ADMIN_SCHEDULER_JOB);

const mapStateToProps = (state: StoreState) => ({
  currentCronExpression: formSelector(
    state,
    'cronExpression'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    change,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateCronExpressionModal);
