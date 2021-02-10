import axios from './index';
import {AxiosResponse} from 'axios';
import {AuthParams, AuthResponse, RegisterParams} from '@models/User';

export class AuthService {
  static login({
    email,
    password,
  }: AuthParams): Promise<AxiosResponse<AuthResponse>> {
    return axios.post('/auth/login', {
      email,
      password,
    });
  }

  static registerUser({
    name,
    email,
    password,
  }: RegisterParams): Promise<AxiosResponse> {
    return axios.post('/users', {
      name,
      email,
      password,
    });
  }

  static logout(): void {}
}
