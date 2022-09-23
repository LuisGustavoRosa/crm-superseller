import { schema, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { BaseValidator } from "../BaseValidator";
export default class ContractValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super();
  }

  public schema = schema.create({
    name: schema.string(),
    sellers_id: schema.number([
      rules.exists({
        table: 'sellers',
        column: 'id',
      }),
    ]),
    leads_id: schema.number([
      rules.exists({
        table: 'leads',
        column: 'id',
      }),
    ]),
  });

  public messages = {
    ...this.messages,
    "email.unique": "Email já existe",
  };
}
