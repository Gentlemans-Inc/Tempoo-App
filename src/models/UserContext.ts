import {createContext} from 'react';

export interface UserContextInterface {
  isSigned: boolean;
}

export const UserContext = createContext(null);
