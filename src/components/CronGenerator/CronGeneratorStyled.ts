import styled from 'theme';

import 'react-cron-generator/dist/cron-builder.css';

export const CronGeneratorStyled = styled.div`
  .cron_builder {
    width: 100%;
    border: none;
    padding: 0;
    background-color: transparent;
  }

  .cron_builder ul {
    list-style-type: none;
  }

  .cron_builder .nav-tabs {
    display: flex;
    align-items: center;
  }

  .cron_builder .nav-tabs li {
    margin: 0 10px;
    border-bottom: 1px solid transparent;
  }
  .cron_builder .nav-tabs li.active,
  .cron_builder .nav-tabs li:hover {
    border-bottom-color: #ffa400;
  }

  .cron_builder .nav-tabs li:first-child {
    margin-left: 0;
  }

  .cron_builder .nav-tabs li:last-child {
    margin-right: 0;
  }

  .cron_builder_bordering {
    border: none;
    padding: 20px 0;
    text-align: left;
  }

  .cron_builder_bordering input {
    cursor: auto;
    margin: 5px 0;
  }
`;
