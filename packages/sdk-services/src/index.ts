import { HttpRequestConfig } from '@kazura/http-client'
import { httpClient } from './helpers'

export type { ResponsePacket } from './helpers'

import { users$add } from './services/users$add'
import { users$delete } from './services/users$delete'
import { users$findAll } from './services/users$findAll'
import { users$findByName } from './services/users$findByName'
import { users$update } from './services/users$update'

export const services = {
  mergeConfig: (config: HttpRequestConfig) => httpClient.mergeConfig(config),
  exportHttpInstance: () => httpClient.exportHttpInstance(),
  users$add,
  users$delete,
  users$findAll,
  users$findByName,
  users$update,
}
