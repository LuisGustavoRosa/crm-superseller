import ContractService from "App/Services/ContractsService";

export default class SellersController {
  private contractService: ContractService;

  constructor() {
    this.contractService = new ContractService();
  }
  public async store({request, response}) {
    const query = request.all();
    try {
      return await this.contractService.store(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async index(){
    return await this.contractService.index()
  }
}
