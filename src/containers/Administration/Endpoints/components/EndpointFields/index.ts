import { connect } from 'react-redux';

import EndpointFields from './EndpointFields';

import { StoreState, userInstitutionsOptionsSelector } from 'store';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(EndpointFields);
