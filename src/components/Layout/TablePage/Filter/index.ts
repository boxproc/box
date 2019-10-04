import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import Filter from './Filter';

import { selectIsAutoRefresh, stopAutoRefresh } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  filterValues: getFormValues(formNamesConst.FILTER)(state),
  isAutoRefresh: selectIsAutoRefresh(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    stopAutoRefresh,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
