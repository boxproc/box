import React from 'react';

import styled from 'theme';

import { Paragraph } from 'components';

const LightText = styled.span`
  opacity: .6;
`;

interface IStatementDate {
  date: string;
}

const StatementDate: React.FC<IStatementDate> = ({ date }) => {
  return (
    <Paragraph light={true} size={13}>
      <b>Statement date:</b> {date ? date : (<LightText>no date</LightText>)}
    </Paragraph>
  );
};

export default StatementDate;
