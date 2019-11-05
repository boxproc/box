import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import {
  handleGetCyclesDescriptions,
  selectCyclesDescriptionsOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
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
