import { ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {
  email: string
  entryDate?: string
  id: number
  name: string
}

export interface IResponseResource {}

export const users$update = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/users/update',
    method: 'POST',
    data,
  })
