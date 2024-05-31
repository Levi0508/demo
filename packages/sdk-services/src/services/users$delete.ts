import { ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {
  id: number
}

export interface IResponseResource {}

export const users$delete = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/users/delete',
    method: 'POST',
    data,
  })
