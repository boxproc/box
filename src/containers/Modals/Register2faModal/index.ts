import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Register2faModal from './Register2faModal';

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
)(Register2faModal);
