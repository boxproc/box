import { connect } from 'react-redux';

import Modals from './Modals';

import { IStoreState, modalsStateListSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  modalsStateList: modalsStateListSelector(state),
});

export default connect(
  mapStateToProps
)(Modals);
