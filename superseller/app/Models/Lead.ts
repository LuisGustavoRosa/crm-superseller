import Seller from "App/Models/Seller";
import { DateTime } from "luxon";
import { BaseModel,column, hasOne, HasOne } from "@ioc:Adonis/Lucid/Orm";
import Contract from "./Contract";

export default class Lead extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: boolean;

  @column()
  public telefone: boolean;

  @column()
  public is_signed: boolean;

  @column()
  public sellers_id : number

  @hasOne(() => Contract, { foreignKey: "sellers_id", localKey: "id" })
  public Contract: HasOne<typeof Contract>;

  @hasOne(() => Seller, { foreignKey: "leads_id", localKey: "id" })
  public seller: HasOne<typeof Seller>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
