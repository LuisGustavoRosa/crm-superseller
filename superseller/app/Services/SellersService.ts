import SellersRepository from "App/Repositories/SellersRepository";

export default class UsersService {
  private sellersRepository: SellersRepository;

  constructor() {
    this.sellersRepository = new SellersRepository();
  }

  public async store(query){
    return await this.sellersRepository.store(query)
  }
  public async index(){
    return await this.sellersRepository.index()
  }
}
