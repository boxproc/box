import React from 'react';

import ErrorModal from './ErrorModal';
import TestModal from './TestModal';

interface ModalsProps {
  modalsStateList?: object;
}

const modalsList = [
  {
    name: 'ErrorModal',
    component: <ErrorModal />,
  },
  {
    name: 'TestModal',
    component: <TestModal />,
  },
];

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
    <div>
      {renderModals()}
    </div>
  );
};

export default Modals;
