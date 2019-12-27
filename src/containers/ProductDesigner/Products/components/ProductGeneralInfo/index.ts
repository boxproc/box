import { connect } from 'react-redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import {
  selectCyclesDescriptionsOptions,
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  statementCyclesOptions: selectCyclesDescriptionsOptions(state),
});

export default connect(
  mapStateToProps
)(ProductGeneralInfo);
