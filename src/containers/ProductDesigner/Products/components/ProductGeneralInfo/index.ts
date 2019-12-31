import { connect } from 'react-redux';

import ProductGeneralInfo from './ProductGeneralInfo';

import { selectInstitutionsOptions } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(ProductGeneralInfo);
