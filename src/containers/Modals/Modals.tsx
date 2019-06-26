import React from 'react';

import MessageModal from './MessageModal';

interface ModalsProps {
  modalsStateList?: object;
}

const modalsList = [
  {
    name: 'MessageModal',
    component: <MessageModal />,
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
