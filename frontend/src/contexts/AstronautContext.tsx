import { createContext, useState, useEffect, useCallback } from "react";
import { AstronautContextType, AstronautType } from "../types";
import { getAllAstronauts } from "../services";

export const AstronautContext = createContext<AstronautContextType>({
  astronautList: [],
  refresh: () => {},
});

export const AstronautContextProvider = (props: any) => {
  const [astronautList, setAstronautList] = useState<AstronautType[]>([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = useCallback(() => {
    getAllAstronauts()
      .then((astronautList) => {
        setAstronautList(astronautList);
      })
      .catch((e) => {
        console.log(" Hanlde Erros here ");
      });
  }, []);

  return (
    <AstronautContext.Provider
      value={{
        astronautList,
        refresh,
      }}
    >
      {props.children}
    </AstronautContext.Provider>
  );
};
