import { connect } from 'react-redux';

import EndpointFields from './EndpointFields';

import { selectInstitutionsOptions, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(EndpointFields);
