import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import Filter from './Filter';

import {
  isAutoRefreshSelector,
  setIsAccessibleFiltering,
  stopAutoRefresh,
  StoreState,
} from 'store';

const formValues = getFormValues(formNamesConst.FILTER);

const mapStateToProps = (state: StoreState) => ({
  filterValues: formValues(state),
  isAutoRefresh: isAutoRefreshSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    stopAutoRefresh,
    setIsAccessibleFiltering,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
