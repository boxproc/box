import React from 'react';

import { ScrollDisable } from 'theme/scrollbarCss';

import { modalsList } from 'containers/Modals/modalsList';

interface ModalsProps {
  modalsStateList?: object;
}

const Modals: React.FC<ModalsProps> = ({ modalsStateList }) => {
  const renderModal = () => modalsList.map((modal, index) => {
    if (!modalsStateList[`is${modal.name}`]) {
      return null;
    }
    return (
      <React.Fragment key={modal.name + index}>
        <ScrollDisable />
        {modal.component}
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      {renderModal()}
    </React.Fragment>
  );
};

export default Modals;
