import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Button from './Button';

import {
  openModal,
} from 'store/domains';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(Button);
