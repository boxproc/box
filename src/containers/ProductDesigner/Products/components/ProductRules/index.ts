import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRules from './ProductRules';

import {
  handleFilterAdminEventDataElemsById,
  selectAdminEventDataElemsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  adminEventDataElemsItems: selectAdminEventDataElemsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAdminEventDataElemsById: handleFilterAdminEventDataElemsById,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
