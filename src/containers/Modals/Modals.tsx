import React from 'react';

import { modalsList } from './modalsList';

interface ModalsProps {
  modalsStateList?: object;
}

const Modals: React.FC<ModalsProps> = ({
  modalsStateList,
}) => {
  const renderModals = () => modalsList.map((modal, index) => {
    if (!modalsStateList[`is${modal.name}`]) {
      return null;
    }
    return (
      <React.Fragment key={modal.name + index}>
        {modal.component}
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      {renderModals()}
    </React.Fragment>
  );
};

export default Modals;
