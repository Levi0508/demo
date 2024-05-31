import { ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {
  name: string
}

export interface IResponseResource {}

export const users$findByName = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/users/findByName' + `/${data.name}`,
    method: 'GET',
    data,
  })
