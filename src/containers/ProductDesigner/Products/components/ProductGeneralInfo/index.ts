import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import {
  createLoadingSelector,
  CycleEditorActionTypes,
  handleGetCyclesDescriptions,
  selectCyclesDescriptionsOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  CycleEditorActionTypes.GET_STATEMENTS_DESCRIPTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoadingCycleDescriptions: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  statementCyclesOptions: selectCyclesDescriptionsOptions(state),
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
