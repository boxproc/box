import { connect } from 'react-redux';

import Modals from './Modals';

import { selectModalsStateList, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  modalsStateList: selectModalsStateList(state),
});

export default connect(
  mapStateToProps
)(Modals);
