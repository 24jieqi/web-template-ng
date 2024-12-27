import { SearchOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React, { memo } from 'react'

import { IconBox } from '@/chunfen'

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  // todo: 路由查询相关逻辑暂未实现
  return (
    <Tooltip title="搜索">
      <IconBox>
        <SearchOutlined />
      </IconBox>
    </Tooltip>
  )
}

export default memo(Search)
