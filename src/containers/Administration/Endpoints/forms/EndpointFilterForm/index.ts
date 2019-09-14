import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EndpointFilterForm from './EndpointFilterForm';

import {
  AdminEndpointsActionTypes,
  createLoadingSelector,
  handleFilterAdminEndpoint,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminEndpointsActionTypes.FILTER_ADMIN_ENDPOINT,
]);

const formSelector = formValueSelector(formNamesConst.ADMIN_ENDPOINT_FILTER);
const dirty = isDirty(formNamesConst.ADMIN_ENDPOINT_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  isLoadingInstitutionProducts: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
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
