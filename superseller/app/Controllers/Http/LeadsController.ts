import LeadService from 'App/Services/LeadsService'

export default class SellersController {
  private leadService: LeadService

  constructor() {
    this.leadService = new LeadService()
  }

  public async store({request,response}){
    const query = request.all()
    try {
      return await this.leadService.store(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async index(){
    return await this.leadService.index()
  }
  public async addLeadSeller({request, response}){
    const query = request.all()
    try {
      return await this.leadService.addClientSeller(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
}
