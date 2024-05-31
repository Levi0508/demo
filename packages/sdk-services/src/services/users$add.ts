import { ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {
  email: string
  name: string
}

export interface IResponseResource {}

export const users$add = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/users/add',
    method: 'POST',
    data,
  })
