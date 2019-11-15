import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change, getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { cronInitialValues } from './cronInitialValues';
import GenerateCronExpressionModal from './GenerateCronExpressionModal';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  formValues: getFormValues(formNamesConst.GENERATE_CRON_EXPRESSION)(state),

  initialValues: cronInitialValues,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    changeFormValue: change,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateCronExpressionModal);
