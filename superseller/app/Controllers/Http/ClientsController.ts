import ClientsService from "App/Services/ClientsService";
import ClientValidator from "App/Validators/Client/ClientValidator";
export default class ClientsController {
  private clientsservice: ClientsService;

  constructor() {
    this.clientsservice = new ClientsService();
  }
  public async store({ request, response }) {
    await request.validate(ClientValidator)
    const query = request.all();
    try {
      return await this.clientsservice.store(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async index(){
    return await this.clientsservice.index()
  }
  public async show({request, response}){
    const seller_id = request.params()
    try {
      return await this.clientsservice.show(seller_id);
    } catch (error) {
      response.badRequest(error);
    }
  }
}
