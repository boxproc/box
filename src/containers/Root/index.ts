import { connect } from 'react-redux';

import Root from './Root';

import { selectVisibleUiItemsList, StoreState } from 'store';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItemsList: selectVisibleUiItemsList(state),
});

export default connect(
  mapStateToProps
)(Root);
