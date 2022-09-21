import SellerService from "App/Services/SellersService";

export default class SellersController {
  private sellerService: SellerService;

  constructor() {
    this.sellerService = new SellerService();
  }

  public async store({ request, response }) {
    const query = request.all();
    try {
      return await this.sellerService.store(query);
    } catch (error) {
      response.badRequest(error);
    }
  }
  public async index() {
    return await this.sellerService.index();
  }
}
