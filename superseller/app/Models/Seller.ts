import  Client  from 'App/Models/Client';
import  Lead  from 'App/Models/Lead';
import { DateTime } from 'luxon'
import { BaseModel,hasOne,HasOne,column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Contract from './Contract'

export default class Seller extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: boolean

  @column()
  public telephone: boolean

  @column()
  public leads_id :number

  @hasOne(() => Contract, { foreignKey: 'sellers_id', localKey: 'id' })
  public Contract: HasOne<typeof Contract>

  @hasMany(() => Lead, { foreignKey: 'sellers_id', localKey: 'id' })
  public lead : HasMany<typeof Lead>

  @hasMany(() => Client, { foreignKey: 'sellers_id', localKey: 'id' })
  public client : HasMany<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
