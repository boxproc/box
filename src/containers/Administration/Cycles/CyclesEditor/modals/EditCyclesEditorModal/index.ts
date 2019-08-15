import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditCyclesEditorModal from './EditCyclesEditorModal';

import { closeModal, selectCycleEditorValues } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  cycleEditorValues: selectCycleEditorValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCyclesEditorModal);
