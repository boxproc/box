import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { change, formValueSelector, getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { cronInitialValues } from './cronInitialValues';
import GenerateCronExpressionModal from './GenerateCronExpressionModal';

import { StoreState } from 'store';

const formSelector = formValueSelector(formNamesConst.GENERATE_CRON_EXPRESSION);
const formValues = getFormValues(formNamesConst.GENERATE_CRON_EXPRESSION);

const mapStateToProps = (state: StoreState) => ({
  formValues: formValues(state),
  cronRadioValues: formSelector(
    state,
    'cronSecond',
    'cronMinute',
    'cronHour',
    'cronDay',
    'cronMonth',
    'cronYear'
  ),
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
