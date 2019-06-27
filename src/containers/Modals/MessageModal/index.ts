import { connect } from 'react-redux';

import MessageModal from './MessageModal';

import {
  selectFieldsMessageModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  fieldsMessageModal: selectFieldsMessageModal(state),
});

export default connect(
  mapStateToProps
)(MessageModal);
