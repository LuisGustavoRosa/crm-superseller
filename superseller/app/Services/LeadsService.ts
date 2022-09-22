import LeadsRepository from "App/Repositories/LeadsRepository";

export default class LeadsService {
  private leadsRepository: LeadsRepository;

  constructor() {
    this.leadsRepository = new LeadsRepository();
  }
  public async store(query) {
    return await this.leadsRepository.store(query);
  }
  public async index() {
    return await this.leadsRepository.index();
  }
  public async show(params) {
    return await this.leadsRepository.show(params);
  }
  public async addClientSeller(query) {
    return await this.leadsRepository.addLeadSeller(query);
  }
  public async indexLeadNoSeller(){
    return await this.leadsRepository.indexLeadNoSeller()
  }
  public async signedLead(lead_id){
    return await this.leadsRepository.signedLead(lead_id)
  }
}
