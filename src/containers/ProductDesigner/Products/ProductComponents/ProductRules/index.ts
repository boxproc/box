import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import { formNames } from 'consts';

import ProductRules from './ProductRules';

import {
  handleFilterAdminEventDataElems,
  handleSetRulesCode,
  selectAdminEventDataElemsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const formValues = formValueSelector(formNames.EDIT_PRODUCT_RULES);

const mapStateToProps = (state: StoreState) => ({
  adminEventDataElemsItems: selectAdminEventDataElemsItems(state),
  eventValue: formValues(
    state,
    'eventId'
  ),
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
