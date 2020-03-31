import { connect } from 'react-redux';

import InterfaceFields from './InterfaceFields';

import { IStoreState, userInstitutionsOptionsSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(InterfaceFields);
