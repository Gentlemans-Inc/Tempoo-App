export interface AuthParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse extends Response {
  data: string;
}
