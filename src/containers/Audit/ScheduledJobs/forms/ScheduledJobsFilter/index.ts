import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ScheduledJobsFilter from './ScheduledJobsFilter';

import {
  handleGetSchedulerNamesByInstId,
  instSchedulerNamesOptions,
  isSchedulerJobNamesGettingSelector,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingSchedulerNames: isSchedulerJobNamesGettingSelector(state),
  schedulerNameOptions: instSchedulerNamesOptions(state),
  institutionValue: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getSchedulerNames: handleGetSchedulerNamesByInstId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledJobsFilter);
