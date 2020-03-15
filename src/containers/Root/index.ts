import { connect } from 'react-redux';

import Root from './Root';

import { selectVisibleUiItemsList } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItemsList: selectVisibleUiItemsList(state),
});

export default connect(
  mapStateToProps
)(Root);
