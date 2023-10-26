import BaseRepository from './BaseRepository';

class SearchUserTokenRepository extends BaseRepository {
  
  constructor(env) {
    const repData = {
      db: env.MONGODB_DB,
      collection: env.MONGODB_COL_USER_TOKEN,
    };
    const uri = env.MONGODB_URI;
    super(uri, repData);
  }

  async searchToken(id) {
    const selectClause = { 'userId': id };
    try {
      return await this.find(selectClause);
    } catch (ex) {
      return [];
    }
  }
}

export default SearchUserTokenRepository;
