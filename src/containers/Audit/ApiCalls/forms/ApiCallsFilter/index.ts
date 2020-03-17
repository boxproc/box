import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ApiCallsFilter from './ApiCallsFilter';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleGetEndpointsByInstitutionId,
  selectEndpointsByInstIdOptions,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.GET_ENDPOINTS_BY_INSTITUTION_ID,
]);

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingEndpoints: loadingSelector(state),
  endpointsOptions: selectEndpointsByInstIdOptions(state),
  institutionValue: formSelector(state, 'institutionId'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getEndpointsByInstitutionId: handleGetEndpointsByInstitutionId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCallsFilter);
