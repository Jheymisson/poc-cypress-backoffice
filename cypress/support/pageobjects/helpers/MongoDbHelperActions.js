
class MongoDbHelperActions {


  async getUsers(cpf) {
    cy.task('selectUsers', cpf).then((usuario) => {
      cy.wrap(usuario[0]['_id']).as('idUser');
    });
  }

  async getToken(id) {
    cy.task('selectToken', id).then((tokenUser) => {
      cy.wrap(tokenUser[0]['token']).as('tUser');
    });
  }

}

export default MongoDbHelperActions;
