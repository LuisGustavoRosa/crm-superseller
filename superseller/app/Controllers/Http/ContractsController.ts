import ContractService from "App/Services/ContractsService";
import ContractValidator from 'App/Validators/Contract/ContractValidator'
export default class ContractController {
  private contractService: ContractService;

  constructor() {
    this.contractService = new ContractService();
  }
  public async store({request, response}) {
    await request.validate(ContractValidator)
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
