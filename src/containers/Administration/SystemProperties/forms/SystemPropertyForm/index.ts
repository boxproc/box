import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemPropertyForm from './SystemPropertyForm';

import {
  activeItemIdSelector,
  currentSysPropSelector,
  handleAddSysProp,
  handleDeleteSysProp,
  handleUpdateSysProps,
  isSysPropAddingSelector,
  isSysPropDeletingSelector,
  isSysPropUpdatingSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isSysPropUpdatingSelector(state)
    || isSysPropAddingSelector(state)
    || isSysPropDeletingSelector(state),
  initialValues: currentSysPropSelector(state),
  currentSystemPropertyId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addSystemProperty: handleAddSysProp,
    deleteSystemProperty: handleDeleteSysProp,
    updateSystemProperty: handleUpdateSysProps,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemPropertyForm);
