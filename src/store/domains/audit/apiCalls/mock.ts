import { ApiCallsItems } from 'store/domains/audit/apiCalls/types';

export const apiCallsItems: ApiCallsItems = {
  response_status: {
    status_code: 0,
  },
  api_calls: [
    {
      id: 1,
      event_datetime: '16/09/2019 11:03:37',
      endpoint_id: 1,
      endpoint_name: 'BOX API endpoint',
      api_name: 'apiname',
      request_body:
`endpoints: [
  {name: "BOX API endpoint", id: 1},
  {name: "Tribe card transactions endpoint", id: 2},
  {name: "Tutuka card transactions endpoint", id: 3}
]
response_status: {status_code: 0}
`,
      response_body: '',
      institution_id: 1,
    },
    {
      id: 2,
      event_datetime: '16/09/2019 11:03:37',
      endpoint_id: 2,
      endpoint_name: 'BOX API endpoint',
      api_name: 'apiname',
      request_body: '',
      response_body: '',
      institution_id: 1,
    },
    {
      id: 3,
      event_datetime: '16/09/2019 11:03:37',
      endpoint_id: 3,
      endpoint_name: 'BOX API endpoint',
      api_name: 'apiname',
      request_body: '',
      response_body: '',
      institution_id: 1,
    },
  ],
};
