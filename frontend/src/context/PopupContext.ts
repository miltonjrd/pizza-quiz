import { createContext } from "react";

import Popup from "../interfaces/Popup";

export interface PopupContextInterface {
  activePopups: Popup[] | [],
  dispatchPopup: (popup: Popup) => void
};

const PopupContext = createContext<PopupContextInterface>({ 
  activePopups: [],
  dispatchPopup: (popup: Popup) => null
});

export default PopupContext