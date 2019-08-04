import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CycleEditorFilter from './CycleEditorFilter';

import {
  createLoadingSelector,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {},
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CycleEditorFilter);
