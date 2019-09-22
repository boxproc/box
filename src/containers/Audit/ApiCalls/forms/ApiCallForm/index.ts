import { connect } from 'react-redux';

import ApiCallForm from './ApiCallForm';

import { selectAuditApiCallDetails } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectAuditApiCallDetails(state),
});

export default connect(
  mapStateToProps
)(ApiCallForm);
