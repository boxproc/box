import { connect } from 'react-redux';

import InterfaceFields from './InterfaceFields';

import { selectInstitutionsOptions, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(InterfaceFields);
