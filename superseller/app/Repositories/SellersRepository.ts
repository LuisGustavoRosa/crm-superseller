import Seller from "App/Models/Seller";

export default class SellersRepository {
  public async store(query) {
  return await Seller.create(query)
  }
  public async index(){
    return await Seller.query().preload('lead')
  }
}
