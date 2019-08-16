import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ProductRules from './ProductRules';

import {
  handleFilterAdminEventDataElems,
  handleSetRulesCode,
  selectAdminEventDataElemsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  adminEventDataElemsItems: selectAdminEventDataElemsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    setRulesCode: handleSetRulesCode,
    filterAdminEventDataElems: handleFilterAdminEventDataElems,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRules);
