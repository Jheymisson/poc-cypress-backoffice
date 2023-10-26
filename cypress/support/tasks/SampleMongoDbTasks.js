import SearchUserTokenRepository from '../repository/SearchUserTokenRepository';
import SearchUserRepository from '../repository/SearchUserRepository';

class SampleMongoDbTasks {
  static define(on, env) {
    
    on('task', {
      selectToken: (id) => {
        try {
          const searchUserTokenRepository = new SearchUserTokenRepository(env);
          return searchUserTokenRepository.searchToken(id);
        } catch (e) {
          console.error(e, e.stack);
        }
        return [];
      },
    });

    on('task', {
      selectUsers: (cpf) => {
        try {
          const searchUsersRepository = new SearchUserRepository(env);
          return searchUsersRepository.searchUsers(cpf);
        } catch (e) {
          console.error(e, e.stack);
        }
        return [];
      },
    });

  }
}

export default SampleMongoDbTasks;
