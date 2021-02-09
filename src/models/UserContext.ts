import {createContext} from 'react';

export interface UserContextInterface {
  isSigned: boolean;
  jwt: string;
}

export const UserContext = createContext(null);
