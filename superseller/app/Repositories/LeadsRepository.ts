import Lead from "App/Models/Lead";
import Client from "App/Models/Client";
export default class LeadsRepository {
  public async store(query) {
    query.sellers_id = null;
    return await Lead.create(query);
  }
  public async index() {
    return await Lead.query() /* .where('is_signed',false) */;
  }
  public async show(params) {
    return await Lead.query().where("sellers_id", params.id);
  }
  public async addLeadSeller(query) {
    return await Lead.query()
      .where("id", query.leads_id)
      .update({ sellers_id: query.sellers_id });
  }
  public async indexLeadNoSeller() {
    return await Lead.query().whereNull("sellers_id");
  }
  public async signedLead(lead_id) {
    const lead = await Lead.findOrFail(lead_id.id);
    lead.is_signed = true;
    await lead.save();

    return await Client.create({
      name: lead.name,
      email: lead.email,
      telefone: lead.telefone,
      sellers_id : lead.sellers_id
    });
  }
}
