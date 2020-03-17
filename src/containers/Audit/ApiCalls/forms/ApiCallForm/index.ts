import { connect } from 'react-redux';

import ApiCallForm from './ApiCallForm';

import { selectAuditApiCallDetails, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectAuditApiCallDetails(state),
});

export default connect(
  mapStateToProps
)(ApiCallForm);
