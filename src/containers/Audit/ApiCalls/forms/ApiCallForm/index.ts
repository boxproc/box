import { connect } from 'react-redux';

import ApiCallForm from './ApiCallForm';

import { selectAuditApiCallStatement } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectAuditApiCallStatement(state),
});

export default connect(
  mapStateToProps
)(ApiCallForm);
