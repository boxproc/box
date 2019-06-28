import { connect } from 'react-redux';

import Modals from './Modals';

import {
  selectModalsStateList,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  modalsStateList: selectModalsStateList(state),
});

export default connect(
  mapStateToProps
)(Modals);
