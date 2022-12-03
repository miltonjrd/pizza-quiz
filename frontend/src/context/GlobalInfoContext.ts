import { createContext } from 'react';
import GlobalInfo from '../interfaces/GlobalInfo';

export interface GlobalInfoContextInterface {
  context: GlobalInfo | null;
  setContext: ((callback: (state: GlobalInfo) => GlobalInfo) => void) | (() => void);
};

const GlobalInfoContext = createContext<GlobalInfoContextInterface>({ context: null, setContext: () => null });

export default GlobalInfoContext;