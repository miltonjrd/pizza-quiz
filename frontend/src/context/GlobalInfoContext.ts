import { createContext } from 'react';
import GlobalInfo from '../interfaces/GlobalInfo';

export interface GlobalInfoContextInterface {
  context: GlobalInfo | null,
  setContext: ((callback: (state: GlobalInfo) => GlobalInfo) => void) | ((state: GlobalInfo) => void)
};

const GlobalInfoContext = createContext<GlobalInfoContextInterface>({ context: null, setContext: (globalInfo: GlobalInfo) => null });

export default GlobalInfoContext;