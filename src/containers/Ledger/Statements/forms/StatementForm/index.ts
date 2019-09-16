import { connect } from 'react-redux';

import StatementForm from './StatementForm';

import { selectLedgerCurrentStatement } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  initialValues: selectLedgerCurrentStatement(state),
});

export default connect(
  mapStateToProps
)(StatementForm);
