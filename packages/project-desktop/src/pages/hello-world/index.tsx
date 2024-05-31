import { useEffect, useState } from 'react'

import styled from '@emotion/styled'

import { services } from '@react-monorepo-project-template/sdk-services'
import { Button, message, Input } from 'antd'

import { useMount } from 'ahooks'

import dayjs from 'dayjs'

const StyledButton = styled.div`
  width: 100%;
  padding: 10px 430px;
  display: flex;
  justify-content: space-around;
`
const StyledButton2 = styled.div`
  div {
    width: 200px;
    color: red;
  }
  width: 100%;
  padding: 10px 200px;
  display: flex;
  justify-content: space-around;
`
const StyledTable = styled.div`
  height: 500px;
  overflow: scroll;
  border: solid 1px black;
`

interface ISourceData {
  email: string
  entryDate: string
  id: number
  name: string
}
export const PageHelloWorld: React.FC = () => {
  const [sourceData, setSourceData] = useState<ISourceData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [inputData, setInputData] = useState('')

  /**
   * 新增数据
   */
  const add = async () => {
    setLoading(true)
    const newData = {
      name: `锋酱${Math.floor(Math.random() * 100) + 1}号`,
      email: `${Math.floor(Math.random() * 100) + 1}@gmail.com`,
    }
    const { data }: { data: any } = await services.users$add(newData)
    if (data) {
      message.success(`新增数据：name:   ${data.name}  ,  email:   ${data.email}`)
      findAll()
      setLoading(false)
    }
  }

  /**
   * 查询所有数据
   */
  const findAll = async () => {
    const { data } = await services.users$findAll({})
    if (data) {
      const newData = (data as any).map((item: ISourceData) => ({
        ...item,
        entryDate: dayjs(item.entryDate).format('YYYY-MM-DD HH:mm:ss'),
      }))
      setSourceData(newData as any)
    }
  }

  /**
   * 删除
   */
  const deleteHandler = async (id: number) => {
    const { data } = await services.users$delete({ id })
    if (data) {
      message.success('删除成功')
      findAll()
    }
  }

  /**
   * 修改
   * @param item
   */
  const updateHandler = async (item: ISourceData) => {
    const newData = {
      name: `修改成锋酱${Math.floor(Math.random() * 1000) + 1}号`,
      email: `${Math.floor(Math.random() * 1000) + 1}@gmail.com`,
      id: item.id,
      entryDate: dayjs() as any,
    }

    const { data } = await services.users$update(newData)
    if (data) {
      message.success(`我修改了${item.name}  和  email${item.email}`)
      findAll()
    }
  }

  /**
   * 根据name搜索
   */
  const findByName = async () => {
    let data: any

    if (inputData) {
      const { data } = await services.users$findByName({ name: inputData })
      if (data) {
        setSourceData([data] as any)
      } else {
        setSourceData([])
      }
    } else {
      findAll()
    }
  }

  useMount(() => {
    findAll()
  })
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>锋酱的CRUD页面</h1>
      <h3>请按下方按钮调用nest接口</h3>
      <StyledButton>
        <div style={{ marginRight: 10 }}>
          <Button onClick={add} loading={loading}>
            我是随机新增数据按钮
          </Button>
        </div>
        <Input onChange={(e) => setInputData(e.target.value)} allowClear></Input>
        <div>
          <Button onClick={findByName}>我是name查询按钮</Button>
        </div>
      </StyledButton>

      <StyledTable>
        {sourceData.length > 0 ? (
          sourceData.map((item) => (
            <StyledButton2 key={item.id}>
              id： <div>{item.id}</div>
              name： <div>{item.name}</div>
              email：<div>{item.email}</div>
              entryDate： <div>{item.entryDate}</div>
              <Button onClick={() => deleteHandler(item.id)}>删除</Button>
              <Button onClick={() => updateHandler(item)}>随机修改</Button>
            </StyledButton2>
          ))
        ) : (
          <div style={{ marginTop: 30 }}>暂无数据</div>
        )}
      </StyledTable>
    </div>
  )
}

export default PageHelloWorld
