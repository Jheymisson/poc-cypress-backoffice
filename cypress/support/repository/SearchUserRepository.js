import BaseRepository from './BaseRepository';

class SearchUserRepository extends BaseRepository {
  
  constructor(env) {
    const repData = {
      db: env.MONGODB_DB,
      collection: env.MONGODB_COL_USERS,
    };
    const uri = env.MONGODB_URI;
    super(uri, repData);
  }

  async searchUsers(cpf) {
    const selectClause = { 'document': cpf };
    try {
      return await this.find(selectClause);
    } catch (ex) {
      return [];
    }
  }
  
}

export default SearchUserRepository;