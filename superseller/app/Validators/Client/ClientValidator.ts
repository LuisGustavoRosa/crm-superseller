import { schema, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { BaseValidator } from "../BaseValidator";
export default class ClientValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super();
  }

  public schema = schema.create({
    name: schema.string(),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({
        table: "clients",
        column: "email",
        caseInsensitive: true,
      }),
      rules.maxLength(40),
    ]),
    telephone: schema.string({ trim: true }, [rules.maxLength(16)]),
    sellers_id: schema.number([
      rules.exists({
        table: 'sellers',
        column: 'id',
      }),
    ]),
  });

  public messages = {
    ...this.messages,
    "email.unique": "Email já existe",
  };
}
