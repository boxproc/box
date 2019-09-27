import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ScheduledJobsFilter from './ScheduledJobsFilter';

import {
  AdminSchedulerJobsActionTypes,
  createLoadingSelector,
  handleGetSchedulerNamesByInstitutionId,
  selectSchedulerNamesByInstIdOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.GET_SCHEDULER_NAMES_BY_INSTITUTION_ID,
]);

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingSchedulerNames: loadingSelector(state),
  schedulerNameOptions: selectSchedulerNamesByInstIdOptions(state),
  institutionValue: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getSchedulerNames: handleGetSchedulerNamesByInstitutionId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledJobsFilter);
