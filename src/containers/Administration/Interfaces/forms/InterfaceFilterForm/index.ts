import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import InterfaceFilterForm from './InterfaceFilterForm';

import {
  handleFilterAdminInterface,
  selectInstitutionsOptions,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
  initialValues: {
    institutionId: selectInstitutionsOptions(state)[0],
  },
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAdminInterface: handleFilterAdminInterface,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterfaceFilterForm);
