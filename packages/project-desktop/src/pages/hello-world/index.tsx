import { useEffect } from 'react'

import { services } from '@react-monorepo-project-template/sdk-services'
import { Button } from 'antd'

export const PageHelloWorld: React.FC = () => {
  const fn = async () => {
    const data = await services.demo$test({})
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>锋酱的test页面</h1>
      <h3>请按下方按钮调用nest接口</h3>
      <Button onClick={fn}>我是按钮</Button>
    </div>
  )
}

export default PageHelloWorld
