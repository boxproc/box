import { connect } from 'react-redux';

import EndpointFields from './EndpointFields';

import { IStoreState, userInstitutionsOptionsSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(EndpointFields);
