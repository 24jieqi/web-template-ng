import { usePagination } from 'ahooks'
import { Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'

import Layout from '@/components/layout'
import {
  type AccountPayload,
  type RolePayload,
} from '@/graphql/generated/types'
import { sleep } from '@/utils'

const EmployeeListPage: React.FC = () => {
  async function requestAccountList(): Promise<{
    total: number
    list: AccountPayload[]
  }> {
    const payload = await sleep<{ totalRecords: number; records: unknown[] }>(
      500,
      {
        totalRecords: 0,
        records: [],
      },
    )
    return {
      total: payload.totalRecords,
      list: payload.records,
    }
  }
  const { data, loading, pagination } = usePagination(requestAccountList)
  const columns: ColumnsType<AccountPayload> = [
    {
      key: 'phone',
      dataIndex: 'phone',
      title: '手机号',
      width: 120,
    },
    {
      key: 'name',
      dataIndex: 'accountName',
      title: '员工姓名',
      width: 120,
    },
    {
      key: 'roles',
      dataIndex: 'roleList',
      title: '已配角色',
      ellipsis: true,
      render(val: RolePayload[]) {
        return val?.map(role => role.roleName)?.join('、')
      },
      width: 240,
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: '状态',
      width: 80,
    },
    {
      key: 'ops',
      title: '操作',
      width: 240,
    },
  ]
  return (
    <Layout.Container>
      <Layout.Table
        actions={<Button type="primary">新增员工</Button>}
        pagination={pagination}
        loading={loading}
        columns={columns}
        dataSource={data?.list}
        rowKey="id"
      />
    </Layout.Container>
  )
}

export default EmployeeListPage
