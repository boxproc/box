import { AdminEventsData } from './types';

export const adminEventsData: AdminEventsData = {
  response_status: {
    status_code: 0,
  },
  events: [
    {
      id: 1,
      name: 'Account create',
    },
    {
      id: 2,
      name: 'Account close',
    },
    {
      id: 3,
      name: 'Account limit changed',
    },
    {
      id: 4,
      name: 'Transaction - Card',
    },
    {
      id: 5,
      name: 'Transaction - Adjustement',
    },
    {
      id: 6,
      name: 'Transaction - Repayment',
    },
    {
      id: 7,
      name: 'Daily Settlement',
    },
    {
      id: 8,
      name: 'Cycle Settlement',
    },
  ],
};