import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditProductModal from './EditProductModal';

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
)(EditProductModal);
