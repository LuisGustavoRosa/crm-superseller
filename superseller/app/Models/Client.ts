import  Seller  from 'App/Models/Seller';
import { DateTime } from 'luxon'
import { BaseModel, belongsTo,column,BelongsTo} from '@ioc:Adonis/Lucid/Orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: boolean

  @column()
  public telefone: boolean

  @column()
  public sellers_id: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @belongsTo(() => Seller, { foreignKey: "sellers_id", localKey: "id" })
  public seller: BelongsTo<typeof Seller>;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
