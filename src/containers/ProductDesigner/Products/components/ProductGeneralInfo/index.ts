import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import {
  AdminCycleEditorActionTypes,
  createLoadingSelector,
  handleGetCyclesDescriptions,
  selectCyclesDescriptionsOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminCycleEditorActionTypes.GET_ADMIN_STATEMENTS_DESCRIPTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoadingCycleDescriptions: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  cycleStatementsOptions: selectCyclesDescriptionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getCyclesDescriptions: handleGetCyclesDescriptions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGeneralInfo);
