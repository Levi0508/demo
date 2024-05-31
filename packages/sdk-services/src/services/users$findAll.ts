import { ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {}

export type IResponseResource = []

export const users$findAll = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/users/findAll',
    method: 'GET',
    data,
  })
