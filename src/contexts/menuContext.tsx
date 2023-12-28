import { ReactNode, createContext, useState } from "react";

type MenuContextProps = {
  children: ReactNode;
}

type MenuContextType = {
  isOpenMenu: boolean;
  setIsOpenMenu: (newState: boolean) => void; 
}

const initialValue = {
  isOpenMenu: false,
  setIsOpenMenu: () => {},
}

export const MenuContext = createContext<MenuContextType>(initialValue);

export const MenuContextProvider = ({ children }: MenuContextProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(initialValue.isOpenMenu);

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuContext.Provider>
  )
}