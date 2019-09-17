import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ApiCallsFilterForm from './ApiCallsFilterForm';

import {
  AuditApiCallsActionTypes,
  createLoadingSelector,
  handleFilterAuditApiCalls,
  handleGetEndpointsByInstitutionId,
  selectApiCallEndpointsOptions,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditApiCallsActionTypes.GET_ENDPOINTS_BY_INSTITUTION_ID,
]);

const formSelector = formValueSelector(formNamesConst.AUDIT_API_CALLS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingEndpoints: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  apiCallEndpointsOptions: selectApiCallEndpointsOptions(state),
  initialValues: {
    institutionId: selectInstitutionsOptions(state)[0],
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
