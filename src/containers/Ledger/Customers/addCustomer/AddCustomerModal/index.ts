import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddCustomerModal from './AddCustomerModal';

import { closeModal } from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(AddCustomerModal);
