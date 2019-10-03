import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import {
  handleGetCyclesDescriptions,
  selectCurrentInstitutionId,
  selectCyclesDescriptionsOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  cycleStatementsOptions: selectCyclesDescriptionsOptions(state),
  currentInstitutionId: selectCurrentInstitutionId(state),
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
