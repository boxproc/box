import { connect } from 'react-redux';

import LogModal from './LogModal';

import { selectPayloadLogModal } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  data: selectPayloadLogModal(state),
});

export default connect(
  mapStateToProps
)(LogModal);
