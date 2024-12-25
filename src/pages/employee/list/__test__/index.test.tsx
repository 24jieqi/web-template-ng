import type { MockedResponse } from '@apollo/client/testing'
import { screen } from '@testing-library/react'

import { AccountPageDocument } from '@/graphql/operations/employee/__generated__/index.generated'
import { MockedRouter } from '@/tests/Provider'
import setup from '@/tests/setup'

import EmployeeListPage from '..'

const mockData: MockedResponse[] = [
  {
    request: {
      query: AccountPageDocument,
      variables: {
        input: {
          pageCurrent: 1,
          pageSize: 10,
          type: 'MERCHANT_WEB',
        },
      },
    },
    result: {
      data: {
        accountPage: {
          pageCurrent: 1,
          pageSize: 10,
          records: [
            {
              roleIdList: ['120000199703285451', '360000198102130120'],
              roleList: [
                {
                  appType: 'SHOPPING_APP',
                  roleId: '340000198010095205',
                  roleName: '角色1',
                  roleStatus: 'ENABLE',
                },
                {
                  appType: 'MERCHANT_WEB',
                  roleId: '820000198008071268',
                  roleName: '角色2',
                  roleStatus: 'UNRECOGNIZED',
                },
              ],
              accountName: '测试员工1',
              id: '150000202201285806',
              phone: '18812345678',
              status: 'ENABLE',
            },
            {
              roleIdList: ['220000197008166287', '810000198912035108'],
              roleList: [
                {
                  appType: 'SHOPPING_APP',
                  roleId: '500000202206217365',
                  roleName: '将放',
                  roleStatus: 'UNRECOGNIZED',
                },
                {
                  appType: 'CHANNEL_WEB',
                  roleId: '430000201202085139',
                  roleName: '与后矿',
                  roleStatus: 'DISABLE',
                },
              ],
              accountName: '种音约',
              id: '650000201012218368',
              phone: '根十带和',
              status: 'DISABLE',
            },
          ],
          totalRecords: 2,
        },
      },
    },
  },
]

describe('employee management list page', () => {
  it('initial render correct', async () => {
    setup(<MockedRouter Compoent={EmployeeListPage} customMock={mockData} />)
    expect(screen.getByText('新增员工')).toBeInTheDocument()
    expect(await screen.findByText('18812345678')).toBeInTheDocument()
  })
})
