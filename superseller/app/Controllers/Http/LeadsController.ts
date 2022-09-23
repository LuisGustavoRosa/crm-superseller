import LeadService from "App/Services/LeadsService";
import LeadValidator from 'App/Validators/Lead/LeadValidator'

export default class LeadsController {
  private leadService: LeadService;

  constructor() {
    this.leadService = new LeadService();
  }

  public async store({ request, response }) {
    await request.validate(LeadValidator)
    const query = request.all();
    try {
      return await this.leadService.store(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async index() {
    return await this.leadService.index();
  }

  public async show({ request, response }) {
    const seller_id = request.params();
    try {
      return await this.leadService.show(seller_id);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async addLeadSeller({ request, response }) {
    const query = request.all();
    try {
      return await this.leadService.addClientSeller(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async indexLeadNoSeller(){
    return await this.leadService.indexLeadNoSeller()
  }
  public async signedLead({request,response}){
    const lead_id = request.params()
    try {
      return await this.leadService.signedLead(lead_id);
    } catch (error) {
      response.badRequest(error);
    }
  }
}
