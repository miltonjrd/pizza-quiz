import { useState } from 'react';
import type { AppProps } from 'next/app';

// interfaces
import GlobalInfo from '../src/interfaces/GlobalInfo';
import Popup from '../src/interfaces/Popup';

// context
import GlobalInfoContext from '../src/context/GlobalInfoContext';
import PopupContext from '../src/context/PopupContext';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [globalInfo, setGlobalInfo] = useState<GlobalInfo>({} as GlobalInfo);
  const [popups, setPopups] = useState<Popup[]>([]);

  const dispatchPopup = (popup: Popup) => {
    setPopups(state => ([
      ...state,
      popup
    ]));
  };

  return (
    <GlobalInfoContext.Provider value={{ context: globalInfo, setContext: setGlobalInfo }}>
      <PopupContext.Provider value={{ dispatchPopup, activePopups: popups }}>
        <Component {...pageProps} />
      </PopupContext.Provider>
    </GlobalInfoContext.Provider>
  );
}
