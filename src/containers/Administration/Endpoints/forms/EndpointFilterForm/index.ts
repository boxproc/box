import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import EndpointFilterForm from './EndpointFilterForm';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleFilterAdminEndpoint,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.GET_ADMIN_ENDPOINT,
]);

const formSelector = formValueSelector(formNames.ADMIN_ENDPOINT_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
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
    filterAdminEndpoint: handleFilterAdminEndpoint,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndpointFilterForm);
