import { connect } from 'react-redux';

import Root from './Root';

import { IStoreState, visibleUiItemsListSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  visibleUiItemsList: visibleUiItemsListSelector(state),
});

export default connect(
  mapStateToProps
)(Root);
