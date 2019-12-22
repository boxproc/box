import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UiItemsDesignerModal from './UiItemsDesignerModal';

import { handleUpdateUiItems, selectUiItemsGroups } from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  uiItemsGroups: selectUiItemsGroups(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateUiItems: handleUpdateUiItems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UiItemsDesignerModal);
