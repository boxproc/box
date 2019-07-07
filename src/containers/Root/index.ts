import { connect } from 'react-redux';

import Root from './Root';

import {
  selectVisibleUiItems,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  visibleUiItems: selectVisibleUiItems(state),
});

export default connect(
  mapStateToProps
)(Root);
