import LeadsRepository from "App/Repositories/LeadsRepository";

export default class LeadsService {
  private leadsRepository: LeadsRepository;

  constructor() {
    this.leadsRepository = new LeadsRepository();
  }
  public async store(query){
    return await this.leadsRepository.store(query)
  }
  public async index(){
    return await this.leadsRepository.index()
  }
  public async addClientSeller(query){
    return await this.leadsRepository.addLeadSeller(query)
  }
}
