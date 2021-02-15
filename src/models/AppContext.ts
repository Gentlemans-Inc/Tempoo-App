import {createContext} from 'react';
import {Theme} from 'styles/styled';

export interface AppContextInterface {
  isSigned: boolean;
  theme: Theme;
  colorScheme: 'light' | 'dark';
}

export const AppContext = createContext(null);
