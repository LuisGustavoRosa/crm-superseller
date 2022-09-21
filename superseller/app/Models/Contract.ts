import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Seller from './Seller'
import Lead from './Lead'

export default class Contract extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public sellers_id : number

  @column()
  public leads_id : number

  @belongsTo(() => Seller, { foreignKey: 'sellers_id', localKey: 'id' })
  public sellers : BelongsTo<typeof Seller>

  @belongsTo(() => Lead, { foreignKey: 'leads_id', localKey: 'id' })
  public lead : BelongsTo<typeof Lead>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
