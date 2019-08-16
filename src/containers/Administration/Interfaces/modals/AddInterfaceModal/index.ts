import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddInterfaceModal from './AddInterfaceModal';

import { closeModal, selectInstitutionsOptions } from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInterfaceModal);
