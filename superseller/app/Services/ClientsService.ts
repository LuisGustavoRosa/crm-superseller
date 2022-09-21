import ClientsRepository from "App/Repositories/ClientsRepository";

export default class UsersService {
  private clientRepository: ClientsRepository;

  constructor() {
    this.clientRepository = new ClientsRepository();
  }
  public async store(query) {
    return await this.clientRepository.store(query);
  }
  public async index(){
    return await this.clientRepository.index()
  }
  public async show (seller_id){
    return await this.clientRepository.show(seller_id)
  }
}
