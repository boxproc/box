import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiItemsDesignerModal from './UiItemsDesignerModal';

import { selectUiItemsGroups } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  uiItemsGroups: selectUiItemsGroups(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiItemsDesignerModal);
