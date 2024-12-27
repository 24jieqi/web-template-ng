import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { useFullscreen } from 'ahooks'
import { Tooltip } from 'antd'
import React, { memo } from 'react'

import { IconBox } from '@/chunfen'

interface FullscreenProps {}

const Fullscreen: React.FC<FullscreenProps> = () => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body)
  return (
    <Tooltip title="全屏">
      <IconBox onClick={toggleFullscreen}>
        {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </IconBox>
    </Tooltip>
  )
}

export default memo(Fullscreen)
