import { connect } from 'react-redux';

import InterfaceFields from './InterfaceFields';

import { StoreState, userInstitutionsOptionsSelector } from 'store';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(InterfaceFields);
