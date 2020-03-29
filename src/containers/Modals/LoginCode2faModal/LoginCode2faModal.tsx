import React from 'react';

import { Box } from '@rebass/grid';

import { CircleList, Modal } from 'components';

import { modalNamesConst } from 'consts';

import { CodeForm } from './forms';

interface IRegister2faModal {}

const modalName = modalNamesConst.LOGIN_CODE_2FA;

const Register2faModal: React.FC<IRegister2faModal> = () => {
  return (
    <Modal
      title="Enter Second Factor Code"
      name={modalName}
      containerWidth="340px"
    >
      <Box mb="7px">
        <CircleList
          items={[
            'Launch Google Authenticator',
            'Enter the code generated by Google Authenticator',
          ]}
        />
      </Box>
      <CodeForm />
    </Modal>
  );
};

export default Register2faModal;
