import  Lead  from 'App/Models/Lead';

export default class LeadsRepository{
  public async store(query){
    query.sellers_id = null
    return await Lead.create(query)
  }
  public async index(){
    return await Lead.query()
  }
  public async addLeadSeller(query){

    const lead = await Lead.find(query.leads_id)
    console.log(lead)
  }
}

