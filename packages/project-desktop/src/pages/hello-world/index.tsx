import { useEffect } from 'react'

import { services } from '@react-monorepo-project-template/sdk-services'
import { Button } from 'antd'

export const PageHelloWorld: React.FC = () => {
  const fn = async () => {
    const data = await services.demo$test({})
  }

  return (
    <div>
      <p>PageHelloWorld</p>
      <p>This project was generated with by react-monorepo-project-template</p>
      <Button onClick={fn}>123</Button>
    </div>
  )
}

export default PageHelloWorld
