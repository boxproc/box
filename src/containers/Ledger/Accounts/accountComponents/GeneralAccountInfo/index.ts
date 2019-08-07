import { connect } from 'react-redux';

import GeneralAccountInfo from './GeneralAccountInfo';

import {
  selectInstitutionsOptions,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(GeneralAccountInfo);
