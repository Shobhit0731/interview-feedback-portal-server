import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration.js';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/user`;
  }

  async loginUser(payload) {
    return this.post('/login', payload);
  }

  async signUpUser(payload) {
    return this.post('/signup', payload);
  }

  async resetPasswordUser(payload) {
    return this.put(`/reset-password`, payload);
    // return this.put(`/reset-password/${payload._id}`, payload);
  }

}