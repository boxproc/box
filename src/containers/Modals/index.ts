import { connect } from 'react-redux';

import Modals from './Modals';

import { modalsStateListSelector, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  modalsStateList: modalsStateListSelector(state),
});

export default connect(
  mapStateToProps
)(Modals);
