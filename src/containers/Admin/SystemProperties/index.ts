import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SystemProperties from './SystemProperties';

import {
  activeItemIdSelector,
  handleDeleteSysProp,
  handleFilterSysProps,
  handleUpdateSysProps,
  isReadOnlySelector,
  isSysPropDeletingSelector,
  isSysPropsFilteringSelector,
  isSysPropUpdatingSelector,
  IStoreState,
  resetSystemProperties,
  sysPropsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isSysPropUpdatingSelector(state)
    || isSysPropDeletingSelector(state)
    || isSysPropsFilteringSelector(state),
  sysPropsItems: sysPropsSelector(state),
  currentSysPropId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteSysProp: handleDeleteSysProp,
    updateSysProps: handleUpdateSysProps,
    filterSysProps: handleFilterSysProps,
    resetSystemProperties,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemProperties);
