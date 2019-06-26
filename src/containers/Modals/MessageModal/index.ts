import { connect } from 'react-redux';

import MessageModal from './MessageModal';

import {
  selectMessageModalFields,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  messageModalFields: selectMessageModalFields(state),
});

export default connect(
  mapStateToProps
)(MessageModal);
