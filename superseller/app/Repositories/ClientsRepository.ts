import Client from "App/Models/Client";

export default class ClientsRepository {
  public async store(query) {
    return await Client.create(query);
  }
  public async index(){
    return await Client.query()
  }
  public async show(seller_id){
    return await Client.query().where('sellers_id', seller_id.id)
  }
}
