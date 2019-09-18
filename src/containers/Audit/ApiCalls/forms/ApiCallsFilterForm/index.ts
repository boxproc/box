import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ApiCallsFilterForm from './ApiCallsFilterForm';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleFilterAuditApiCalls,
  handleGetEndpointsByInstitutionId,
  selectEndpointsByInstIdOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { dateUtil } from 'utils';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.GET_ENDPOINTS_BY_INSTITUTION_ID,
]);

const formSelector = formValueSelector(formNamesConst.AUDIT_API_CALLS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingEndpoints: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  endpointsOptions: selectEndpointsByInstIdOptions(state),
  initialValues: {
    institutionId: selectInstitutionsOptions(state)[0],
    dateFrom: dateUtil.yesterday,
    dateTo: dateUtil.today,
  },
  institutionValue: formSelector(
    state,
    'institutionId'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAuditApiCalls: handleFilterAuditApiCalls,
    getEndpointsByInstitutionId: handleGetEndpointsByInstitutionId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCallsFilterForm);
