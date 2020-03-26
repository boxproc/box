import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNamesConst } from 'consts';

import ApiCallsFilter from './ApiCallsFilter';

import {
  endpointsByInstIdOptionsSelector,
  handleGetEndpointsByInstitutionId,
  isInstEndpointsLoadingSelector,
  StoreState,
} from 'store';

const formSelector = formValueSelector(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  endpointsOptions: endpointsByInstIdOptionsSelector(state),
  institutionValue: formSelector(state, 'institutionId'),
  isLoadingEndpoints: isInstEndpointsLoadingSelector(state),
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
