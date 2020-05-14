import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import AprsForm from './AprsForm';

import { formNamesConst } from 'consts';

import {
  handleAddProductApr,
  isProductAprsAddingSelector,
  IStoreState,
} from 'store';
import { dateUtil } from 'utils';

const formSelector = formValueSelector(formNamesConst.PRODUCT_APRS);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isProductAprsAddingSelector(state),
  initialValues: {
    aprFutureStartDate: dateUtil.tomorrowDate(),
  },
  startDateValue: formSelector(state, 'aprStartDate'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addProductApr: handleAddProductApr,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AprsForm);
