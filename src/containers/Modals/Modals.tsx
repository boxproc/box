import React from 'react';

import { ScrollDisable } from 'theme/styles';

import { modalsList } from 'containers/Modals/modalsList';

interface ModalsProps {
  modalsStateList?: object;
}

const Modals: React.FC<ModalsProps> = ({ modalsStateList }) => {
  return (
    <React.Fragment>
      {modalsList.map((modal, index) => {
        const { name, component } = modal;

        if (!modalsStateList[`is${name}`]) {
          return null;
        }

        return (
          <div key={name + index}>
            {name && (<ScrollDisable />)}
            {component}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Modals;
