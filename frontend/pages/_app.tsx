import { useState } from 'react';
import type { AppProps } from 'next/app';
import GlobalInfo from '../src/interfaces/GlobalInfo';

// context
import GlobalInfoContext from '../src/context/GlobalInfoContext';

import '../styles/globals.scss';


export default function App({ Component, pageProps }: AppProps) {
  const [globalInfo, setGlobalInfo] = useState<GlobalInfo | null>(null);

  return (
    <GlobalInfoContext.Provider value={{ context: globalInfo, setContext: setGlobalInfo }}>
      <Component {...pageProps} />
    </GlobalInfoContext.Provider>
  );
}
