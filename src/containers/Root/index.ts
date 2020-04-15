import { connect } from 'react-redux';
import Root from './Root';

import { isLoadedUiItemsSelector, IStoreState, visibleUiItemsListSelector } from 'store';

const mapStateToProps = (state: IStoreState) => ({
  visibleUiItemsList: visibleUiItemsListSelector(state),
  isLoadedUiItems: isLoadedUiItemsSelector(state),
});

export default connect(
  mapStateToProps
)(Root);
