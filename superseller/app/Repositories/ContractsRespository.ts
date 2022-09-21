import Contract from "App/Models/Contract";

export default class ContractsRepository {
  public async store(query) {
    return await Contract.create(query);
  }
  public async index() {
    return await Contract.query()
    .preload("lead")
    .preload("sellers")
  }
}
