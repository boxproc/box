import { connect } from 'react-redux';

import EndpointFields from './EndpointFields';

import { selectInstitutionsOptions } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(EndpointFields);
