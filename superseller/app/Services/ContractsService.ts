import ContractRepository from "App/Repositories/ContractsRespository";

export default class ContractsService {
  private contractRepository: ContractRepository;

  constructor() {
    this.contractRepository = new ContractRepository();
  }
  public async store(query){
    return await this.contractRepository.store(query)
  }
  public async index(){
    return await this.contractRepository.index()
  }

}
