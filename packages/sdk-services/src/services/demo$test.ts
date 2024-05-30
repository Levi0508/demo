import { ResponsePacket, httpClient } from '../helpers'

export interface IRequestResource {}

export interface IResponseResource {}

export const demo$test = (data: IRequestResource) =>
  httpClient.request<ResponsePacket<IResponseResource>>({
    url: '/cats/findOne',
    method: 'POST',
    data,
  })